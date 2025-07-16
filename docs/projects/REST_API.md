---
id: REST_API
title: REST API
---

# 📘 REST API Project Documentation

---

## 🌐 What is a REST API?

REST API stands for Representational State Transfer - Application Programming Interface.  
It is a design pattern used to build web services that allow clients (like browsers, mobile apps, or other servers) to communicate with a backend over HTTP.

---

## 📩 Common HTTP Methods in REST API

| HTTP Method | Action  | Description         | Example                      |
|-------------|---------|---------------------|------------------------------|
| GET         | Read    | Fetch data          | /api/employees               |
| POST        | Create  | Add new data        | /api/employees + data        |
| PUT         | Update  | Modify existing data| /api/employees/5             |
| DELETE      | Delete  | Remove data         | /api/employees/5             |

---

## 🗣️ Real-World Analogy

Imagine a company building:

- Frontend is the reception desk (Client)
- REST API is the front office (exposes services)
- Backend logic is the team inside doing the work
- Database is the file room where records are stored

---

## 🏗️ Project Setup Flow

### 1. Project Initialization

Tool used: Spring Initializr

Dependencies selected:

- Spring Web
- Spring Data JPA
- MySQL Driver
- Lombok

Command:
```
npx create-springboot-project
# or manually from Spring Initializr
```

---

## 📁 Folder Structure

```
src/
├── main/
│   ├── java/in/rest/springtest/
│   │   ├── controller/
│   │   ├── model/
│   │   ├── repository/
│   │   ├── service/
│   │   └── SpringRestApiApplication.java
│   └── resources/
│       └── application.properties
```

---

## 📁 controller/

Purpose:  
Handles incoming HTTP requests (GET, POST, PUT, DELETE).  
Connects frontend/Postman to backend logic.

Example:
```
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @GetMapping
    public List<Employee> getAllEmployees() { ... }
}
```

📌 Think of this as the entry point for clients.

---

## 📁 model/

Purpose:  
Contains your Entity classes — they represent tables in the DB.

Example:
```
@Entity
public class Employee {
    private Long id;
    private String name;
}
```

📌 Think of this as the blueprint of your database.

---

## 📁 repository/

Purpose:  
Handles DB communication using Spring Data JPA.

Example:
```
public interface EmployeeRepository extends JpaRepository<Employee, Long> {}
```

📌 Think of this as the database access layer.

---

## 📁 service/

Purpose:  
Contains the business logic.  
Talks to repository and sends results to controller.

Example:
```
public class EmployeeServiceImpl implements EmployeeService {
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}
```

📌 Think of this as the brain of your application.

---

## 📄 SpringRestApiApplication.java

Purpose:  
This is the main class. Application starts from here.

Example:
```
@SpringBootApplication
public class SpringRestApiApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringRestApiApplication.class, args);
    }
}
```

📌 Think of this as the engine starter of your app.

---

## Step-by-Step Flow

### Step 1: Create the Model class

Represents your data structure (like a table in DB).

Use @Entity to mark it as DB-mapped.

```
package in.rest.springtest.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
@Entity
@Table(name="tbl_employee")
public class Employee {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="age")
    private Long age;

    @Column(name="email")
    private String email;

    @Column(name="department")
    private String department;
}
```

---

### 🔍 Explanation of Employee.java

Lombok:
```
@Setter: Automatically generates setter methods for all fields (e.g., setName()).

@Getter: Generates getter methods (e.g., getName()).

@ToString: Generates a toString() method (useful for logging/debugging).
```

JPA:
```
@Entity - marks the class as a JPA Entity It tells Spring Boot and Hibernate: “This class maps to a table in the database.”
@Table(name="tbl_employee") - maps to DB table 'tbl_employee'
@Id - sets field as Primary Key
@GeneratedValue(strategy=GenerationType.IDENTITY) - auto-increment from DB
@Column(...) - maps field to column
```

Fields:
```
@Column(name="name") - maps to name column
@Column(name="age") - maps to age column
@Column(name="email") - maps to email column
@Column(name="department") - maps to department column
```

---

## 🛑 JSON Tips

- `@JsonProperty("fullName")`: Renames field in JSON output
  - Example: `name` → "fullName": "Prajwal"
- `@JsonIgnore`: Hides field from API response (e.g., sensitive data)

---
### Step 2: Create the Model class
Create the Repository Interface

File: EmployeeRepository.java

```
package in.rest.springtest.repository;

import in.prajwal.springtest.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}

```
---

### 🔍 Explanation

```
package in.rest.springtest.repository;
Defines the package for the class, helping in code organization.

import in.prajwal.springtest.model.Employee;
Imports the Employee entity.

import org.springframework.data.jpa.repository.JpaRepository;
Imports JpaRepository which provides built-in methods like findAll(), save(), etc.

import org.springframework.stereotype.Repository;
Indicates this interface is a repository and should be managed by Spring.

@Repository
Declares the interface as a Spring-managed component responsible for database interaction.

```
---


| Part                    | Meaning                                                     |
| ----------------------- | ----------------------------------------------------------- |
| `EmployeeRepository`    | Name of your repository interface                           |
| `extends JpaRepository` | Inherits DB access methods                                  |
| `<Employee, Long>`      | `Employee` is the Entity, `Long` is the type of Primary Key |

### Built-in Methods from JpaRepository
Without writing any implementation, you get:
```

findAll()

findById(id)

save(entity)

deleteById(id)

count()
```
### You can also define custom methods like:

```
List<Employee> findByDepartment(String department);

```

| Layer      | Role                           |
| ---------- | ------------------------------ |
| Repository | Handles database communication |
|            | No need to write SQL manually  |
|            | Provides default CRUD methods  |


## ✅ Step 3: Create the Service Layer

---

### 📄 File: `EmployeeService.java` (Interface)

```java
package in.rest.springtest.service;

import in.rest.springtest.model.Employee;
import java.util.List;

public interface EmployeeService {

    List<Employee> getEmployees();

    Employee saveEmployee(Employee employee);

    Employee getSingleEmployee(Long id);

    void deleteEmployee(Long id);

    Employee updateEmployee(Employee employee);
}
```

🔍 Explanation
This is an interface that defines the contract for business logic.

Any class that implements this interface must provide definitions for these methods

| Method                              | Purpose                       |
| ----------------------------------- | ----------------------------- |
| `getEmployees()`                    | Fetch all employees           |
| `saveEmployee(Employee employee)`   | Save a new employee           |
| `getSingleEmployee(Long id)`        | Fetch one employee by ID      |
| `deleteEmployee(Long id)`           | Delete employee by ID         |
| `updateEmployee(Employee employee)` | Update existing employee info |

 File: EmployeeServiceImpl.java (Implementation)

 ```
 package in.rest.springtest.service;

import in.rest.springtest.model.Employee;
import in.rest.springtest.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeServiceimpl implements EmployeeService {

    @Autowired
    private EmployeeRepository eRepository;

    @Override
    public List<Employee> getEmployees() {
        return eRepository.findAll();
    }

    @Override
    public Employee saveEmployee(Employee employee){
        return eRepository.save(employee);
    }

    @Override
    public Employee getSingleEmployee(Long id){
        Optional<Employee> employee = eRepository.findById(id);
        if(employee.isPresent()){
            return employee.get();
        }
        throw new RuntimeException("Employee is not found for the id " + id);
    }

    @Override
    public void deleteEmployee(Long id){
        eRepository.deleteById(id);
    }

    @Override
    public Employee updateEmployee(Employee employee){
        return eRepository.save(employee);
    }
}
 ```
  Explanation of Annotations & Code
  | Keyword / Annotation         | Meaning                                                                     |
| ---------------------------- | --------------------------------------------------------------------------- |
| `@Service`                   | Marks this class as a service bean so Spring can manage it                  |
| `@Autowired`                 | Automatically injects the `EmployeeRepository` dependency                   |
| `implements EmployeeService` | Means this class must define all methods in the `EmployeeService` interface |
| `Optional<Employee>`         | Used to safely handle `null` cases from `findById`                          |
| `eRepository.findAll()`      | Returns a list of all employees from DB                                     |
| `eRepository.save(employee)` | Saves or updates employee in DB                                             |
| `eRepository.findById(id)`   | Finds an employee by primary key (ID)                                       |
| `eRepository.deleteById(id)` | Deletes an employee by ID                                                   |

Summary

| Layer   | Purpose                                          |
| ------- | ------------------------------------------------ |
| Service | Contains business logic of the app               |
|         | Talks to the Repository layer                    |
|         | Implements functionality requested by Controller |

## ✅ Step 4: Create the Controller

---

### 📄 File: `EmployeeController.java`

```java
package in.rest.springtest.controller;

import in.rest.springtest.model.Employee;
import in.rest.springtest.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService eService;

    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return eService.getEmployees();
    }

    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable("id") Long id) {
        return eService.getSingleEmployee(id);
    }

    @DeleteMapping("/employees")
    public void deleteEmployee(@RequestParam("id") long id) {
        eService.deleteEmployee(id);
    }

    @PostMapping("/employees")
    public Employee saveEmployee(@RequestBody Employee employee) {
        return eService.saveEmployee(employee);
    }

    @PutMapping("/employees/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee employee) {
        employee.setId(id);
        return eService.updateEmployee(employee);
    }
}
```
###  Explanation of Annotations & Behavior

| Annotation                       | Purpose                                                                                                   |
| -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `@RestController`                | Combines `@Controller` + `@ResponseBody` — tells Spring this class handles REST requests and returns JSON |
| `@Autowired`                     | Injects the service layer so controller can call service methods                                          |
| `@GetMapping("/employees")`      | Handles `GET` request to fetch all employees                                                              |
| `@GetMapping("/employees/{id}")` | Fetches employee by `id` from path                                                                        |
| `@DeleteMapping("/employees")`   | Deletes employee using query param `?id=`                                                                 |
| `@PostMapping("/employees")`     | Adds a new employee from request body                                                                     |
| `@PutMapping("/employees/{id}")` | Updates employee by `id` in URL and data in request body                                                  |

## ✅ Step 5: Setting Up MySQL Database

---

### 🛠️ Step 1: Create MySQL Database and User

Before running your Spring Boot app, create a database and user in MySQL.

#### Open MySQL terminal:

```bash
mysql -u root -p
```
#### Create a new database:

```bash
CREATE DATABASE employee_db;
```
#### Create a new user:

```bash
CREATE USER 'user'@'localhost' IDENTIFIED BY 'password';
```
#### Grant privileges to the user:

```bash
GRANT ALL PRIVILEGES ON db_name.* TO 'user'@'localhost';
FLUSH PRIVILEGES;
```

### Step 2: Configure application.properties
Go to:
```src/main/resources/application.properties
```

Add the following configuration:

```
# Database Configuration
spring.datasource.url=jdbc:mysql://localhost:3306/db_name
spring.datasource.username=user
spring.datasource.password=password
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# JPA / Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

# Server Port (optional)
server.port=8080

```
### Explaination

| Property                                  | Meaning                                    |
| ----------------------------------------- | ------------------------------------------ |
| `spring.datasource.url`                   | JDBC connection string to your DB          |
| `spring.datasource.username`              | DB username (`user`)                    |
| `spring.datasource.password`              | DB password                                |
| `spring.datasource.driver-class-name`     | MySQL JDBC driver                          |
| `spring.jpa.hibernate.ddl-auto=update`    | Auto-update schema based on entity classes |
| `spring.jpa.show-sql=true`                | Shows SQL queries in the console           |
| `spring.jpa.properties.hibernate.dialect` | Tells Hibernate to use MySQL syntax        |
| `server.port=8080`                        | Changes default server port (optional)     |





