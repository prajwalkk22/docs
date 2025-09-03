
# JDBC (Java Database Connectivity) – Deep Notes

## 🔹 What is JDBC?
- JDBC is an **API** in Java (`java.sql` package) that allows Java programs to **connect to relational databases** like PostgreSQL, MySQL, Oracle, etc.
- It provides a standard way to:
  - Establish a connection to the database
  - Execute SQL queries/updates
  - Retrieve results
  - Manage transactions

### 🤔 Intuition
- Java itself cannot understand how to talk to PostgreSQL, MySQL, etc.  
- JDBC acts as a **bridge** → it defines interfaces.  
- Each DBMS provides its **driver** (implementation of JDBC).  
- Without JDBC, every database would need custom Java APIs → more complex.

---

## ✅ Basic Steps in JDBC
1. **Import Packages**
   ```java
   import java.sql.*;
   ```
   - Provides `Connection`, `Statement`, `ResultSet`, `PreparedStatement`.

2. **Load Driver (optional in modern Java)**
   ```java
   Class.forName("org.postgresql.Driver");
   ```
   - Explicitly tells JVM which database driver to use.

3. **Establish Connection**
   ```java
   Connection con = DriverManager.getConnection(url, uname, password);
   ```
   - URL format: `jdbc:postgresql://<host>:<port>/<dbname>`
   - Returns a `Connection` object → main gateway to DB.

4. **Create Statement**
   - For static SQL:
     ```java
     Statement st = con.createStatement();
     ```
   - For dynamic SQL (safer):
     ```java
     PreparedStatement pst = con.prepareStatement("insert into students values (?,?,?)");
     ```

5. **Execute SQL**
   - Query (returns rows):
     ```java
     ResultSet rs = st.executeQuery("SELECT * FROM students");
     ```
   - Update/Insert/Delete:
     ```java
     int rows = st.executeUpdate("DELETE FROM students WHERE sid=2");
     ```
   - Prepared statement (with parameters):
     ```java
     pst.setInt(1, 1);
     pst.setString(2, "Prajwal");
     pst.setString(3, "A");
     pst.executeUpdate();
     ```

6. **Process Results**
   ```java
   while(rs.next()){
       System.out.println(rs.getInt("sid") + " " + rs.getString("sname"));
   }
   ```

7. **Close Connection**
   ```java
   rs.close();
   st.close();
   con.close();
   ```

---

## 🔹 Statement vs PreparedStatement

### Statement
- Used for static SQL queries (no variables).
- Example:
  ```java
  Statement st = con.createStatement();
  ResultSet rs = st.executeQuery("SELECT * FROM students");
  ```

### PreparedStatement
- Used for **dynamic queries** with placeholders `?`.
- Example:
  ```java
  PreparedStatement pst = con.prepareStatement("INSERT INTO students VALUES (?,?,?)");
  pst.setInt(1, sid);
  pst.setString(2, sname);
  pst.setString(3, section);
  pst.executeUpdate();
  ```

#### Intuition
- **PreparedStatement** is preferred:
  - Precompiled → faster for repeated execution
  - Prevents **SQL Injection**
  - More readable for dynamic queries

---

## 🔹 CRUD Examples with JDBC

### Insert 5 Students
```java
String insertSQL = "INSERT INTO students VALUES (?,?,?)";
PreparedStatement pst = con.prepareStatement(insertSQL);

pst.setInt(1, 1);
pst.setString(2, "Prajwal");
pst.setString(3, "A");
pst.executeUpdate();
// Repeat for other students...
```

### Update Student
```java
String updateSQL = "UPDATE students SET sname=? WHERE sid=?";
PreparedStatement pst = con.prepareStatement(updateSQL);
pst.setString(1, "Prajwal_Updated");
pst.setInt(2, 2);
pst.executeUpdate();
```

### Delete Student
```java
String deleteSQL = "DELETE FROM students WHERE sid=?";
PreparedStatement pst = con.prepareStatement(deleteSQL);
pst.setInt(1, 3);
pst.executeUpdate();
```

### Get Student by ID
```java
String sql = "SELECT * FROM students WHERE sid=?";
PreparedStatement pst = con.prepareStatement(sql);
pst.setInt(1, id);
ResultSet rs = pst.executeQuery();
if (rs.next()) {
    System.out.println(rs.getInt("sid") + " " + rs.getString("sname"));
}
```

---

## 🔹 SQL Injection – Why PreparedStatement is Safer

### Bad (using Statement)
```java
String sql = "SELECT * FROM users WHERE username='" + uname + "' AND password='" + pass + "'";
```
- If `pass = "' OR '1'='1"`, query becomes:
  ```sql
  SELECT * FROM users WHERE username='admin' AND password='' OR '1'='1'
  ```
- Attacker logs in without password.

### Good (using PreparedStatement)
```java
String sql = "SELECT * FROM users WHERE username=? AND password=?";
PreparedStatement pst = con.prepareStatement(sql);
pst.setString(1, uname);
pst.setString(2, pass);
```
- Input treated as **data**, not SQL.

---

## 🔹 Transactions in JDBC

```java
con.setAutoCommit(false);

PreparedStatement pst1 = con.prepareStatement("INSERT INTO students VALUES (?,?,?)");
// ... set params and execute

PreparedStatement pst2 = con.prepareStatement("UPDATE students SET sname=? WHERE sid=?");
// ... set params and execute

con.commit(); // if everything succeeds
// con.rollback(); if any fails
```

### Intuition
- Transactions ensure **all-or-nothing**.
- Useful in banking systems (withdraw + deposit must both succeed).

---

## 🔹 execute vs executeUpdate vs executeQuery

- **executeQuery()** → For `SELECT`, returns `ResultSet`
- **executeUpdate()** → For `INSERT/UPDATE/DELETE`, returns row count
- **execute()** → Can run any SQL, returns `true` if `ResultSet`, `false` if update

---

## 🔹 DAO Pattern (Cleaner Design)

```java
class StudentDAO {
    Connection con;
    StudentDAO(Connection con){ this.con = con; }

    public void insertStudent(int id, String name, String section) throws SQLException {
        String sql = "INSERT INTO students VALUES (?,?,?)";
        PreparedStatement pst = con.prepareStatement(sql);
        pst.setInt(1, id);
        pst.setString(2, name);
        pst.setString(3, section);
        pst.executeUpdate();
    }
}
```

### Intuition
- Keeps database logic separate from main program.
- Avoids repeating JDBC code everywhere.

---

## 🔹 Assignments (Solved)
- Insert 5 students ✔️  
- Update name by ID ✔️  
- Delete by ID ✔️  
- Get student by ID ✔️  
- SQL Injection example ✔️  
- Transactions ✔️  
- DAO pattern ✔️  

---

## 🔹 Alternative Ways to Work with Databases
1. **ORM Frameworks** (Hibernate, JPA, Spring Data JPA)
   - Handles SQL automatically
   - Works with objects instead of writing SQL
2. **JDBC Template (Spring)**  
   - Simplifies JDBC, removes boilerplate
3. **Direct Statement (not recommended)**  
   - Simpler but insecure and inefficient

---

# 🎯 Key Takeaways
- Always use **PreparedStatement** for safety & efficiency.
- Understand **transactions** for critical operations.
- Use **DAO pattern** for cleaner, reusable code.
- For bigger projects, consider ORM frameworks like **Hibernate**.

---
