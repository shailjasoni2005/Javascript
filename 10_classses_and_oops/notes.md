#javascript and classes:-
Do javascript have classes?
Yes,js does have classes.This feature was introduced with ES6.However,it's important to note that js is primarily a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanisms.In other words ,it provides a more familiar syntax for developers coming from class-based languages such as java or c++, but under the hood, it works somewhat differently.

##oop:-

##object:-
-collection of properties(variables,constants) and methods.

##why use oop:-
Object-Oriented Programming (OOP) in JavaScript is used to organize code in a way that makes it easier to manage, scale, and reuse.

##Parts(component) of oop:
    -Object literal:-An object literal in JavaScript is a simple and concise way to create an object using curly braces {}.
    -constructor function
    -Prototypes
    -classes
    -Instances (new,this)

##4 pillars:-
    -Abstraction
    -Encapsulation
    -Inheritance
    -Polymorphism


##-------------Prototype------------##

By default behaviour of js is prototype behaviour,

Prototype: Every JavaScript object has a hidden property called   [[Prototype]] that points to another object, called its prototype. This prototype object can have its own properties and methods, which the original object can access.

(Actually if we see it in opposite direction that says that when we asks for any object in js is tries to find it in layer then inside it and inside that layer and so on until it gets null value)

This is the prototype behaviour of js . And the keywords like this,new, access of classes,inheritance , are works by linking with this prototype.