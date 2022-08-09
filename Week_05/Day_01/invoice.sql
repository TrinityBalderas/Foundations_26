/* #1 */
SELECT COUNT(*) FROM invoice WHERE billing_country = 'USA';
-- SELECT billing_country, COUNT(*) 
-- FROM invoice 
-- WHERE billing_country = 'USA'
-- group by billing_country

/* #2 */
SELECT MAX(total) FROM invoice;
-- SELECT billing_address, total
-- FROM invoice
-- Where total in (select max(total) from invoice)

/* #3 */
SELECT MIN(total) FROM invoice;

/* #4 */
SELECT * FROM invoice WHERE total > 5;

/* #5 */
SELECT COUNT(*) FROM invoice WHERE total < 5;
-- SELECT billing_address, COUNT(*) 
-- FROM invoice 
-- WHERE total < 5
-- group by billing_address

/* #6 */
SELECT COUNT(*) FROM invoice WHERE billing_state in ('CA', 'TX', 'AZ');

/* #7 */
SELECT AVG(total) FROM invoice;

/* #8 */
SELECT SUM(total) FROM invoice;

/* #9 */
UPDATE invoice
SET total = 24
WHERE invoice_id = 5;