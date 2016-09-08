/// <reference path = "_reference.ts" />

import Person = objects.Person;
import Student = objects.Student;

console.log("Game is running");

var person : Person = new Person("Wallace");
person.speak();

var student : Student = new Student("Donald", 123456789);
student.speak();
student.studies();
