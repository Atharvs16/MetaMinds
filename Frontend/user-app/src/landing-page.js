import React, { useState } from "react";

const Manoswasthya = () => {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div>
      <header className="bg-white shadow-md p-4">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex items-center space-x-2">
            <img
              src="https://th.bing.com/th/id/OIP.1cuQrT3RVx3Ct0r3pO6JmQHaHa?w=200&h=200&c=7&r=0&o=5&dpr=1.1&pid=1.7"
              alt="Manoswasthya Logo"
              className="w-20 h-auto"
            />
            <span className="text-lg font-semibold">Manoswasthya</span>
          </div>
          <div className="space-x-4">
            <a href="#home" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-500">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-500">Services</a>
            <a href="#blog" className="text-gray-700 hover:text-blue-500">Blog</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a>
            <a href="email.html">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center" style={{ backgroundImage: "url('https://images.yourstory.com/cs/wordpress/2017/06/fear.jpg?fm=png&auto=format')" }}>
          <div>
            <h1 className="text-3xl font-bold">Transform Your Mental Wellness Today</h1>
            <p className="mt-4 max-w-lg mx-auto">
              Discover a revolutionary platform for mental health support. Harness AI for personalized care and proactive monitoring.
            </p>
            <button className="mt-4 bg-blue-500 px-6 py-2 rounded">Sign In</button>
          </div>
        </section>
      </main>

      {/* Chatbot Button */}
      <button onClick={() => setChatOpen(true)} className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full">💬 Chat</button>
      
      {/* Chatbot Container */}
      {chatOpen && (
        <div className="fixed bottom-20 right-4 w-80 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
          <div className="bg-blue-500 text-white p-3 flex justify-between">
            <span>Chatbot</span>
            <button onClick={() => setChatOpen(false)} className="text-lg">✖</button>
          </div>
          <div className="p-3 h-64 overflow-y-auto">Hello! How can I help you?</div>
          <div className="flex p-3 border-t">
            <input type="text" placeholder="Type a message..." className="flex-grow p-2 border rounded" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manoswasthya;
