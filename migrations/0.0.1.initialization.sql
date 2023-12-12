/* v0.0.1 Initialization Of Schema */
/* Creating User Schema */

CREATE USER c##learn_typescript IDENTIFIED BY password;
-- DROP USER c##learn_typescript

/* Granting Required Privileges  */
GRANT CONNECT, RESOURCE TO c##learn_typescript;

-- CONNECT c##learn_typescript/password
-- SHOW USER; 

-- SELECT tname FROM tab;