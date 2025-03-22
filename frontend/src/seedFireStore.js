import { db } from "./Firebase.js";
import { collection, addDoc } from "firebase/firestore";

// Array of OOP Questions and Answers
const oopQA = [
  { question: "What is OOP?", answer: "OOP stands for Object-Oriented Programming, a paradigm based on objects and classes." },
  { question: "What are the four pillars of OOP?", answer: "The four pillars of OOP are Encapsulation, Abstraction, Inheritance, and Polymorphism." },
  { question: "What is Encapsulation?", answer: "Encapsulation is the bundling of data and methods that operate on that data into a single unit, a class." },
  { question: "What is Inheritance?", answer: "Inheritance allows a class to inherit properties and behaviors from another class." },
  { question: "What is Polymorphism?", answer: "Polymorphism allows objects to be treated as instances of their parent class, making code more flexible." },
  { question: "What is Abstraction?", answer: "Abstraction hides complex implementation details and only shows relevant information to the user." },
  { question: "What is a class in OOP?", answer: "A class is a blueprint for creating objects, defining attributes and behaviors." },
  { question: "What is an object in OOP?", answer: "An object is an instance of a class that has its own state and behavior." },
  { question: "What is a constructor?", answer: "A constructor is a special method that initializes an object when it is created." },
  { question: "What is method overloading?", answer: "Method overloading allows multiple methods in the same class with the same name but different parameters." },
  { question: "What is method overriding?", answer: "Method overriding allows a subclass to provide a specific implementation of a method from its superclass." },
  { question: "What is a static method?", answer: "A static method belongs to the class rather than any specific instance and can be called without an object." },
  { question: "What is an interface in OOP?", answer: "An interface defines a contract with methods that must be implemented by derived classes." },
  { question: "What is multiple inheritance?", answer: "Multiple inheritance allows a class to inherit from more than one base class, which is not allowed in some languages like Java." },
  { question: "What is an abstract class?", answer: "An abstract class cannot be instantiated and is meant to be subclassed, containing abstract methods." },
  { question: "What is composition in OOP?", answer: "Composition is a design principle where objects are composed of other objects instead of inheritance." },
  { question: "What is a destructor?", answer: "A destructor is a method called when an object is destroyed, used to clean up resources." },
  { question: "What is an association in OOP?", answer: "Association represents a relationship between two objects, where one can use the other." },
  { question: "What is aggregation?", answer: "Aggregation is a type of association where one object contains another, but both can exist independently." },
  { question: "What is dependency in OOP?", answer: "Dependency is when one class depends on another to function correctly, often seen in parameter passing." },
];

// Function to add questions to Firestore
const seedFirestore = async () => {
  const collectionRef = collection(db, "OOP_Questions");

  for (const qa of oopQA) {
    try {
      await addDoc(collectionRef, qa);
      console.log(`Added: ${qa.question}`);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  console.log("Seeding completed!");
};

// Run the function
seedFirestore();
