DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INT  PRIMARY KEY,
  name VARCHAR(250) NOT NULL,
  first_name VARCHAR(250) NOT NULL,
  middle_name VARCHAR(250) NOT NULL,
  last_name VARCHAR(250) NOT NULL,
  age INT NOT NULL,
  gender INT NOT NULL,
  dob TIMESTAMP NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  known_languages VARCHAR(250) NOT NULL
);

INSERT INTO user (id, name, first_name, middle_name, last_name, age, gender, dob, email, phone, known_languages) VALUES
  (1, 'Arpit R Mishra', 'Arpit', 'R', 'Mishra', 30, 1, '17-09-2012 18:47:52.690', 'arpitm1989@gmail.com','9540027161', 'English');