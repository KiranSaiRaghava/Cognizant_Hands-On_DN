
BEGIN
    EXECUTE IMMEDIATE 'DROP TABLE Employees';
EXCEPTION
    WHEN OTHERS THEN
        IF SQLCODE != -942 THEN
            RAISE;
        END IF;
END;
/

-- Create Employees table
CREATE TABLE Employees (
    EmpID NUMBER PRIMARY KEY,
    EmpName VARCHAR2(100),
    Department VARCHAR2(50),
    Salary NUMBER(10, 2)
);
/

-- Insert employee data
INSERT INTO Employees VALUES (201, 'Aarav', 'Admin', 32000);
INSERT INTO Employees VALUES (202, 'Divya', 'Admin', 36000);
INSERT INTO Employees VALUES (203, 'Ritika', 'Tech', 45000);
INSERT INTO Employees VALUES (204, 'Sohan', 'Tech', 47000);
COMMIT;
/

-- Create procedure to apply department-wise bonus
CREATE OR REPLACE PROCEDURE ApplyDeptBonus (
    p_dept_name IN VARCHAR2,
    p_bonus_pct IN NUMBER
) IS
    v_updated_count NUMBER;
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_pct / 100)
    WHERE Department = p_dept_name;

    v_updated_count := SQL%ROWCOUNT;

    DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || v_updated_count || 
                         ' employee(s) in ' || p_dept_name || 
                         ' department (' || p_bonus_pct || '%).');

    COMMIT;
END;
/

-- Call the procedure for Admin department with 10% bonus
BEGIN
    ApplyDeptBonus('Admin', 10);
END;
/