---
title: Variable and Types
day: 2
description: Learn variables and data types in Python.
---
# Variables
---
+ variables are used to hold data during execution of the program
- In C, C++, you need to declare variables Only after declaration you can use them.
```
int a;
int b;
```
- In Python you don't need to declarevariables.If there is a need of a variable you thank of a name and start using it as a variable.
```
a=7
b=10
```

# Variable Name
---
- variable name is any combination of alphabet, digit and underscore
- variable name cannot start with digit
- variable names are case sensitive
- keywords cannot be used as variable name

| Example 1 | Example 2 |
|---|---|
| `x = 5` | `x = 5` |
| `x = 7` | `x = 2.9` |
| We changed the value of variable `x`, but the type remains the same. | We changed both the value and the type of variable `x`. |
# Dynamic Type
---
Not only the value of a variable may change during program execution but the type as well
```
x=5  # type of x is int
x=5.8  # type of x is float
x=True  # type of x is bool
x="Welcome"  # type of x is str
```
# Type() function in Python
---
type() isa predefined function which returns the data type of a specified variable
```
x=5
type(x)

x=5.9
type(x)
```
data type is always a class in Python

# Data Types
---
- numbers
    - int
    - float
    - complex
- Boolean
    - bool
- String
    - str

double is not in Python.

char is not in Python.
