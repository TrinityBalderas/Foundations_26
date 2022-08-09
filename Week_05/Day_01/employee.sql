/* #1 */
SELECT first_name, last_name FROM employee WHERE city = 'Calgary';

/* #2 */
SELECT MAX(birth_date) from employee;
-- SELECT first_name, birth_date
-- from employee
-- WHERE birth_date in (select max(birth_date) from employee)

/* #3 */
SELECT MIN(birth_date) from employee;
-- SELECT first_name, birth_date
-- from employee
-- WHERE birth_date in (select min(birth_date) from employee)

/* #4 */
SELECT * FROM employee WHERE reports_to = 2;
-- SELECT employee_id, last_name, first_name, reports_to as reports_to_Nancy
-- FROM employee 
-- WHERE reports_to  = 2;

/* #5 */
SELECT COUNT(*) FROM employee WHERE city = 'Lethbridge';
-- SELECT COUNT(*) as Employees_in_Letherbridge 
-- FROM employee 
-- WHERE city = 'Lethbridge';