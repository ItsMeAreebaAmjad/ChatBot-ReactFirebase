import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const Home = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! How are you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const fetchAnswer = async (question) => {
    const normalizeText = (text) => 
      text.trim().toLowerCase().replace(/[^\w\s]/g, ""); // Remove punctuation
  
    const normalizedQuestion = normalizeText(question);

    // List of greetings
    const greetings = ["hi", "hello", "hey", "hii", "heyy", "good morning", "good evening"];

    // Check if the question is a greeting
    if (greetings.includes(normalizedQuestion)) {
        return "Hello! How can I help you with Object-Oriented Programming (OOP) today? 😊";
    }

    // Fetch all questions from Firestore
    const q = query(collection(db, "OOP_Questions"));
    const querySnapshot = await getDocs(q);
  
    let foundAnswer = null;
    
    querySnapshot.forEach((doc) => {
      const storedQuestion = normalizeText(doc.data().question); // Normalize stored question
      if (storedQuestion === normalizedQuestion) {
        foundAnswer = doc.data().answer;
      }
    });

    return foundAnswer || "Sorry, I can only answer questions related to Object-Oriented Programming (OOP).";
};
  
  

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    
    const botResponse = await fetchAnswer(input);
    setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
    
    setInput("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-700">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-6 flex flex-col border border-gray-200">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-5 rounded-t-3xl text-center font-bold text-xl shadow-lg uppercase tracking-wide">
          Urban Chat
        </div>
        
        <div className="h-96 overflow-y-auto p-4 flex flex-col space-y-4 bg-gray-50 rounded-lg shadow-inner">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow max-w-xs border ${msg.sender === "bot" ? "self-start bg-white text-gray-800 border-gray-300" : "self-end bg-gradient-to-r from-indigo-500 to-purple-500 text-white"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>
        
        <div className="flex items-center p-4 bg-white rounded-b-3xl shadow-lg border-t border-gray-300">
          <input
            type="text"
            placeholder="Ask an OOP question..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="ml-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-3 rounded-full hover:opacity-80 flex items-center gap-2 transition-all shadow-md"
            onClick={handleSendMessage}
          >
            <FaPaperPlane className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;