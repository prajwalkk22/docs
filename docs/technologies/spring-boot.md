---
id: spring-boot
title: Spring Boot
---

# Spring Boot

# 📘 Spring Boot + Core Java Backend Complete Notes

---

## 🌐 1. How the Web Works

The web works on a **request-response model**.

A client sends a request to a server.  
The server processes it and sends back a response.

Client → HTTP Request → Server
Server → HTTP Response → Client


### Definitions

- **Client**: Application requesting data (browser/mobile app)
- **Server**: Program that handles requests
- **Protocol**: Rules of communication (HTTP/HTTPS)

---

## 🖥️ 2. Client-Server Architecture

A system where:

- Client requests services
- Server provides services

Benefits:

- Scalability
- Centralized control
- Resource sharing

Example:

Browser → Spring Boot API → Database

---

## 🔗 3. What is an API?

API = Application Programming Interface

An API defines how software systems communicate.

### Definition

> An API is a contract that exposes functionality and data in a structured way.

Example:

GET /users
POST /users


---

## 🔄 4. Types of API Requests

| Method | Meaning |
|--------|---------|
| GET | Retrieve data |
| POST | Create data |
| PUT | Update data |
| DELETE | Remove data |
| PATCH | Partial update |

---

## 🧱 5. REST API Architecture

REST = Representational State Transfer

### REST Principles

- Stateless communication
- Resource-based URLs
- Standard HTTP verbs
- Client-server separation
- Uniform interface

Example:

/users/10/orders


---

## 🔐 6. HTTP vs HTTPS

| HTTP | HTTPS |
|------|------|
| Not encrypted | Encrypted |
| Insecure | Secure |
| Fast but unsafe | Safe communication |

HTTPS uses SSL/TLS encryption.

---

## 📊 7. HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK |
| 201 | Created |
| 400 | Bad request |
| 401 | Unauthorized |
| 404 | Not found |
| 500 | Internal error |

---

## 📌 8. Resource, URI, Sub-resource

- **Resource**: Data entity (User, Order)
- **URI**: Unique address to access resource
- **Sub-resource**: Related nested resource

Example:

/users/5/orders


---

## ⚙️ 9. What is a Web Framework?

A web framework:

- Handles routing
- Manages HTTP requests
- Provides structure
- Reduces boilerplate

Spring is a Java web framework.

---

## 🔗 10. Tight Coupling vs Loose Coupling

### Tight Coupling ❌

```java
UserService s = new UserService();

Hard dependency.
Loose Coupling ✅

Dependencies injected externally.

Spring promotes loose coupling.
🌱 11. Spring Framework Core Concepts

Spring provides:

    Dependency Injection

    Inversion of Control

    Bean management

    Container lifecycle

    Aspect-oriented programming

📦 12. Spring Container

Spring container:

    Creates beans

    Injects dependencies

    Manages lifecycle

    Controls object scope

🔁 13. Dependency Injection (DI)

DI = Providing dependencies externally.
Types

    Constructor injection ✅ best

    Setter injection

    Field injection ❌ avoid

Benefits:

    Testable

    Flexible

    Loose coupling

🔄 14. Bean Lifecycle

    Bean instantiation

    Dependency injection

    Initialization

    Ready state

    Destruction

🔌 15. Autowiring

Spring automatically wires dependencies.

Annotations:

@Autowired
@Qualifier

Types:

    By type

    By name

    Constructor

🚀 16. Spring Boot

Spring Boot simplifies Spring.

Features:

    Auto configuration

    Embedded server

    Starter dependencies

    Production ready

🧠 17. Spring Boot Architecture

Controller → Service → Repository → Database

Layer responsibilities:

    Controller → API handling

    Service → Business logic

    Repository → Database access

⚙️ 18. application.properties

Used to configure:

    Server port

    Database connection

    Logging

    Environment settings

🗄️ 19. ORM + JPA

ORM = Object Relational Mapping

Maps Java objects ↔ database tables.

JPA = Java Persistence API

Provides abstraction over SQL.
🧩 20. Entities

Entities represent database tables.

@Entity
class User {}

📚 21. Repository Layer

Spring Data JPA auto-generates queries.

interface UserRepository extends JpaRepository<User, Long>

✅ 22. Validation

Ensures correct input.

Annotations:

@NotNull
@Size
@Email
@Valid

❗ 23. Custom Exceptions

Improves API clarity.

Examples:

    ResourceNotFoundException

    APIException

🔥 Core Java Backend Fundamentals
🧠 Objects and References

    A variable stores a reference to an object, not the object itself.

Student s = new Student();

    Class = datatype

    Variable = reference

    Object = heap memory

🧠 Stack vs Heap
Stack	Heap
References	Objects
Method calls	Dynamic memory
Fast	Slower
🔄 Passing Objects as Parameters

Java is pass-by-value.

But value = copy of reference.

modify(s);

Both variables point to same object.
🔑 Important Rule

You can modify object state:

s.marks = 90;

But cannot change original reference.
🧱 Class vs Object

    Class = blueprint

    Object = instance

    Variable datatype = class name

❓ Your Doubts Explained
❓ If object not created how variable points?

It doesn’t. Variable is empty until assigned.
❓ Spring creates object automatically?

Yes. Spring container creates and injects.
❓ Can one object handle large scale?

Yes — if stateless.

Spring services are singleton + thread safe.
❓ Without Spring must parent class create object?

Yes. Developer must use new.
❓ How to pass object as parameter?

Pass reference variable.
🎯 Interview Questions
What is Dependency Injection?

Providing dependencies externally.
What is IoC?

Framework controls object creation.
What is a Bean?

Object managed by Spring container.
Why constructor injection?

Immutable, safe, testable.
What is stateless service?

Service without shared mutable data.
How objects passed in Java?

Copy of reference.
Difference stack vs heap?

Stack = references
Heap = objects
Why singleton beans safe?

Stateless + multi-threading.
What is JPA?

Persistence abstraction over database.
🏁 Final Summary

    Java variables store references

    Objects live in heap

    Spring manages object lifecycle

    DI removes tight coupling

    Services should be stateless

    REST APIs are resource based

    JPA maps objects to database

    Spring Boot auto-configures everything

✅ You now understand:

✔ Web architecture
✔ Spring fundamentals
✔ Object lifecycle
✔ Dependency injection
✔ Java memory model
✔ Backend design principles


---

If you want next, I can:

✅ Add diagrams version  
✅ Add advanced Spring interview section  
✅ Add multithreading explanation  
✅ Add REST best practices  
✅ Add production architecture notes  
✅ Add concurrency & scalability  

Just tell me what to expand next.


ChatGPT can make mistakes. Check important info. See Cookie Preferences.
