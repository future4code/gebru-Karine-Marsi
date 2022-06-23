```
CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;
SHOW TABLES;
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Lázaro Ramos",
  500000,
  "1955-02-21", 
  "male"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Taís Araújo",
  178000,
  "1980-06-03", 
  "female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Camila Pitanga",
  500000,
  "1981-01-02", 
  "female"
);
SELECT * FROM Actor;
SELECT id, salary from Actor;
SELECT id, name, salary, birth_date from Actor WHERE gender = "female";
SELECT salary from Actor WHERE name = "Tony Ramos"; 
```