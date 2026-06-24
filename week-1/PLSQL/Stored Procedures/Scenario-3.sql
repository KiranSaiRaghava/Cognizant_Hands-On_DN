CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    AccountHolderName VARCHAR2(100),
    AccountType VARCHAR2(20),
    Balance NUMBER(15, 2)
);

INSERT INTO Accounts VALUES (1, 'Alice', 'SAVINGS', 5000);
INSERT INTO Accounts VALUES (2, 'Bob', 'SAVINGS', 3000);
INSERT INTO Accounts VALUES (3, 'Charlie', 'CURRENT', 7000);
COMMIT;

CREATE OR REPLACE PROCEDURE TransferFunds (
    p_source_account IN NUMBER,
    p_target_account IN NUMBER,
    p_amount IN NUMBER
) IS
    v_source_balance NUMBER;
BEGIN
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account;

    IF v_source_balance < p_amount THEN
        DBMS_OUTPUT.PUT_LINE('Transfer failed: Insufficient balance.');
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance.');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_source_account;

    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_target_account;

    DBMS_OUTPUT.PUT_LINE('Transferred ₹' || p_amount || 
                         ' from Account ID ' || p_source_account || 
                         ' to Account ID ' || p_target_account || '.');

    COMMIT;
END;
/

BEGIN
    TransferFunds(1, 2, 1000); 
END;
/