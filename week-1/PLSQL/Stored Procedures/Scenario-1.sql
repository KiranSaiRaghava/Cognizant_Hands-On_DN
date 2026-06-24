CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    AccountHolderName VARCHAR2(100),
    AccountType VARCHAR2(20),
    Balance NUMBER(15, 2)
);

INSERT INTO Accounts VALUES (1, 'Alice', 'SAVINGS', 5000);
INSERT INTO Accounts VALUES (3, 'Charlie', 'CURRENT', 7000);



SET SERVEROUTPUT ON;

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
    v_rows_updated NUMBER;
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'SAVINGS';

    v_rows_updated := SQL%ROWCOUNT;

    DBMS_OUTPUT.PUT_LINE(v_rows_updated || ' savings account(s) updated with 1% interest.');

    
END;
/

BEGIN
    ProcessMonthlyInterest;
END;
/