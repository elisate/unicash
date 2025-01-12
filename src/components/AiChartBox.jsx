import React, { useState } from "react";
import { ChatBox } from "react-chatbox-component";

const AiChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, Welcome to Iga Tech. How can I help you?",
      sender: "AI",
    },
  ]);

  const handleNewUserMessage = (newMessage) => {
    const userMessage = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
    };

    const aiMessage = generateAiResponse(newMessage);

    setMessages((prevMessages) => [...prevMessages, userMessage, aiMessage]);
  };

  const generateAiResponse = (userMessage) => {
    let aiResponse = "";

    if (userMessage.toLowerCase().includes("iga tech")) {
      aiResponse =
        "Iga Tech is dedicated to empowering communities with digital skills through innovative courses and resources.";
    } else if (userMessage.toLowerCase().includes("help")) {
      aiResponse =
        "Sure! I can assist you with information about our courses, growth stats, and more!";
    } else {
      aiResponse = "Sorry, I didn't quite catch that. Can you please rephrase?";
    }

    return {
      id: messages.length + 2,
      text: aiResponse,
      sender: "AI",
    };
  };

  return (
    <div className="fixed bottom-8 left-8 w-96 p-6 bg-white shadow-xl rounded-lg z-50">
      <h2 className="text-xl font-bold mb-4">Iga Tech Chat</h2>
      <ChatBox
        messages={messages}
        handleNewUserMessage={handleNewUserMessage}
        title="Iga Tech Chat"
        placeholder="Ask me anything about Iga Tech!"
      />
    </div>
  );
};

export default AiChatBox;
