
-- Now that we have some basic query examples. Let's try doing some more complicated ones. Use www.sqlteaching.com or sqlbolt.com as resources for the missing keywords you'll need.

-- Find the average length of all tracks in milliseconds
-- Find the number of invoices in the USA
-- Make a list of all the First Names of Customers that contain an 'a'
-- Make a list of the 10 longest tracks
-- Make a list of the 20 shortest tracks
-- Find all the customers that live in California or Washington
-- Find all the customers that live in California, Washington, Utah, Florida, or Arizona (Use IN keyword)
-- Insert an artist to the database
-- Insert yourself as a customer to the database
-- Find a list of all Playlists that start with Classical
-- You can either continue exploring this dataset or look into setting up postgres on your local machine.

1. SELECT * FROM artist
2. SELECT (first_name, last_name, country) FROM employee
3. SELECT (name, composer, milliseconds) FROM track WHERE milliseconds > 299000;
4. SELECT COUNT(*) FROM track WHERE milliseconds > 299000;
-- BD:
1. SELECT avg(milliseconds) FROM track 
2. SELECT sum(total) FROM invoice
3. SELECT * FROM customer WHERE first_name LIKE 'A%'
4. SELECT max(milliseconds) FROM track ORDER BY milliseconds DESC
4. SELECT * FROM track ORDER BY milliseconds DESC LIMIT 10
5. SELECT * FROM track ORDER BY milliseconds ASC LIMIT 20
6. SELECT * FROM customer WHERE state IN ('California', 'Washington')
7. SELECT * FROM customer WHERE state IN ('California', 'Washington', 'Utah', 'Florida', 'Arizona')
8. INSERT INTO  artist(name, artist_id)
   VALUES artist, artist_id
