CREATE TABLE `storefront`.`table` (
  `ID` INT NOT NULL,
  `PRODUCTNAME` VARCHAR(45) NULL,
  `DEPARTMENT` VARCHAR(45) NULL,
  `PRICE` INT NULL,
  `STOCK` INT NULL,
  PRIMARY KEY (`ID`));

DROP TABLE IF EXISTS `storefront`.`table`;

CREATE TABLE `storefront`.`table`  (
  `ID` int(10) NOT NULL AUTO_INCREMENT,
  `PRODUCTNAME` varchar(50) NOT NULL,
  `DEPARTMENT` varchar(50) NOT NULL,
  `PRICE` int(10) DEFAULT NULL,
  `STOCK` int(10) DEFAULT NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

LOCK TABLES `storefront`.`table` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */

INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('1', '1 Night Package', 'Night', '1000', '5');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('2', '2 Night Package', 'Night', '2000', '6');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('3', '3 Night Package', 'Night', '3000', '7');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('4', 'Food Option 1', 'Food', '500', '2');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('5', 'Food Option 2', 'Food', '700', '3');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('6', 'Food Option 3', 'Food', '900', '4');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('7', 'Lodging 1', 'Lodging', '1200', '1');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('8', 'Lodging 2', 'Lodging', '1500', '2');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('9', 'Lodging 3', 'Lodging', '1800', '3');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('10', 'Transportation 1', 'Transportation', '1500', '1');
INSERT INTO `storefront`.`table` (`ID`, `PRODUCTNAME`, `DEPARTMENT`, `PRICE`, `STOCK`) VALUES ('11', 'Transportation 2', 'Transportation', '3000', '1');


/*!40000 ALTER TABLE `Products` ENABLE KEYS */
UNLOCK TABLES;