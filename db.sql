
-- Insert 8 rows for the table 'users'
INSERT INTO users (UserID, UserEmail, UserPassword, UserFirstName, UserLastName, UserCity, UserState, UserZip, UserEmailVerified, UserRegistrationDate, UserVerificationCode, UserIP, UserPhone, UserFax, UserCountry, UserAddress, UserAddress2) VALUES
(1, 'john.doe@example.com', 'password123', 'John', 'Doe', 'Cityville', 'Stateville', '12345', 1, NOW(), 'ABC123', '192.168.0.1', '1234567890', '0987654321', 'Countryland', '123 Street', 'Apt 2'),
(2, 'jane.smith@example.com', 'password456', 'Jane', 'Smith', 'Townsville', 'Regionville', '67890', 1, NOW(), 'DEF456', '192.168.0.2', '2345678901', '1098765432', 'Countryland', '456 Avenue', 'Suite 1'),
(3, 'alice.johnson@example.com', 'password789', 'Alice', 'Johnson', 'Metropolis', 'District', '54321', 1, NOW(), 'GHI789', '192.168.0.3', '3456789012', '2109876543', 'Countryland', '789 Blvd', 'Floor 3'),
(4, 'bob.brown@example.com', 'password321', 'Bob', 'Brown', 'Villageville', 'Province', '98765', 0, NOW(), 'JKL012', '192.168.0.4', '4567890123', '3210987654', 'Countryland', '321 Crescent', 'Block B'),
(5, 'charlie.white@example.com', 'password654', 'Charlie', 'White', 'Countryside', 'County', '87654', 1, NOW(), 'MNO345', '192.168.0.5', '5678901234', '4321098765', 'Countryland', '654 Lane', 'Unit 4'),
(6, 'daisy.green@example.com', 'password987', 'Daisy', 'Green', 'Seaside', 'Territory', '76543', 0, NOW(), 'PQR678', '192.168.0.6', '6789012345', '5432109876', 'Countryland', '987 Path', 'Suite C'),
(7, 'edward.blue@example.com', 'password159', 'Edward', 'Blue', 'Mountainville', 'Range', '65432', 1, NOW(), 'STU901', '192.168.0.7', '7890123456', '6543210987', 'Countryland', '246 Way', 'Level 1'),
(8, 'fiona.yellow@example.com', 'password753', 'Fiona', 'Yellow', 'Riverland', 'Basin', '54321', 1, NOW(), 'VWX234', '192.168.0.8', '8901234567', '7654321098', 'Countryland', '135 Street', 'Section D');