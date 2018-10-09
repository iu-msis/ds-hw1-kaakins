DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  comment VARCHAR(250)
);

INSERT INTO Comments(id, comment)
VALUES (1,"I have something important to say");
INSERT INTO Comments(id, comment)
VALUES (2,"D&S is awesome");
INSERT INTO Comments(id, comment)
VALUES (3,"😁");
