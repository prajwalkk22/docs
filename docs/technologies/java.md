---
id: java
title: Java
---

# Java


# What is Java?
Java is a high-level, object-oriented, platform-independent programming language developed by Sun Microsystems (now owned by Oracle) and released in 1995.

It is designed to be:

✅ Simple
✅ Secure
✅ Portable
✅ Robust
✅ Scalable

# Why Java?
Java is a powerful, object-oriented programming language.

It’s platform-independent — write once, run anywhere (via JVM).

Used in Android apps, websites, banking, and enterprise systems.

It's fast, secure, and great for building scalable applications.


<div style={{ textAlign: 'center' }}>
  <img src="/img/jvm.png" alt="JVM Diagram" width="300" />
</div>




## 📌 1. Variables

Variables are used to store data. Java is strongly typed language

```java
int age = 25;
String name = "Prajwal";
double pi = 3.14;
````

---

## 📌 2. Data Types

Java supports two categories:

* **Primitive types**: `int(4 bytes)`, `float(4bytes)`, `double(8bytes)`, `char(2 bytes)`, `boolean(1byte)`,   
  short(2 bytes), long(8 bytes).
* **Reference types**: Arrays, Objects

```java
int count = 100;
float price = 45.5f;
char grade = 'A';
boolean isJavaFun = true;
String message = "Hello, Java!";
```

---

## 📌 3. Type Conversion and Casting

### 🔹 Implicit Conversion (Widening)

```java
int x = 10;
double y = x;  // int to double automatically
```

### 🔹 Explicit Casting (Narrowing)

```java
double d = 10.75;
int i = (int) d;  // manually cast double to int
```

---

## 📌 4. Type Promotion

Java promotes smaller types to larger types in expressions.

```java
byte b = 42;
char c = 'A';
short s = 1024;
int i = 50000;

int result = b + c + s + i;  // all promoted to int
System.out.println(result);
```

---

## 📌 5. Operators

### 🔹 Arithmetic Operators

```java
int a = 10, b = 5;
System.out.println(a + b);  // 15
System.out.println(a - b);  // 5
System.out.println(a * b);  // 50
System.out.println(a / b);  // 2
System.out.println(a % b);  // 0
```

### 🔹 Relational Operators

```java
System.out.println(a == b);  // false
System.out.println(a > b);   // true
```

### 🔹 Logical Operators

```java
boolean x = true;
boolean y = false;

System.out.println(x && y);  // false
System.out.println(x || y);  // true
System.out.println(!x);      // false
```

### 🔹 Assignment Operators

```java
int num = 10;
num += 5;  // same as num = num + 5
System.out.println(num);  // 15
```

---

## 📌 6. Switch Statement

Use switch to replace long `if-else` chains.

```java
int day = 3;

switch (day) {
  case 1:
    System.out.println("Monday");
    break;
  case 2:
    System.out.println("Tuesday");
    break;
  case 3:
    System.out.println("Wednesday");
    break;
  default:
    System.out.println("Other day");
}
```

---

## 📌 7. Loops

### 🔁 For Loop

```java
for (int i = 1; i <= 5; i++) {
  System.out.println(i);
}
```

### 🔁 While Loop

```java
int i = 1;
while (i <= 5) {
  System.out.println(i);
  i++;
}
```

### 🔁 Do-While Loop

```java
int i = 1;
do {
  System.out.println(i);
  i++;
} while (i <= 5);
 ```
 ```
Loop Type	                      Use When...	                   Example
for	      You know the exact number of iterations	       Loop through array or range
while	      You don’t know how many times — loop until done  File reading, input loop
do-while      You want the loop to run at least once	       Menu, retry until success
```

