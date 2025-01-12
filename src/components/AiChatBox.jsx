import React, { useState } from "react";
import { ChatBox } from "react-chatbox-component";
import { OpenAIApi } from "openai";

const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY, // Ensure the API key is correctly set
});

const AiChatBox = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello, Welcome to Iga Tech. How can I help you?",
      sender: "AI",
      avatar: "/logo.png", // Reference the image directly from public folder
    },
  ]);
  const [userMessage, setUserMessage] = useState("");

  const handleNewUserMessage = (newMessage) => {
    const userMessageData = {
      id: messages.length + 1,
      text: newMessage,
      sender: "user",
      avatar: "/logo.png", // Reference the image directly from public folder
    };

    fetchAiResponse(newMessage).then((aiMessage) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        userMessageData,
        aiMessage,
      ]);
      setUserMessage("");
    });
  };

  const fetchAiResponse = async (userMessage) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: userMessage,
      max_tokens: 150,
      temperature: 0.7,
    });

    return {
      id: messages.length + 2,
      text: response.data.choices[0].text.trim(),
      sender: "AI",
      avatar: "/logo.png", // Reference the image directly from public folder
    };
  };

  return (
    <div className="fixed bottom-8 left-8 w-80 p-4 bg-white shadow-xl rounded-lg z-50">
      <h2 className="text-lg font-semibold mb-3">Iga Tech Chat</h2>
      <ChatBox
        messages={messages}
        handleNewUserMessage={handleNewUserMessage}
        title="Iga Tech Chat"
        placeholder="Ask me anything!"
      />
      <div className="flex items-center mt-4">
        <div className="avatar">
          <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full" />
        </div>
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg ml-2"
        />
        <button
          onClick={() => handleNewUserMessage(userMessage)}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default AiChatBox;
