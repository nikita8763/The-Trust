import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatOpen, setChatOpen] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue !== '') {
      setMessages([...messages, { content: inputValue, isUser: true }]);
      setInputValue('');
      // TODO: Handle the user's message and generate a response
      // You can use a chatbot library or custom logic to handle the responses
    }
  };

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div
      className={`fixed right-4 bottom-4 z-10 bg-black rounded-lg shadow-md overflow-hidden ${
        isChatOpen ? 'h-96' : 'h-16'
      } transition-all duration-500`}
    >
      {isChatOpen ? (
        <div className="h-full flex flex-col">
          <div className="flex items-center justify-between bg-blue-500 text-white px-4 py-2">
            <h2 className="text-lg font-semibold">Chat with Us</h2>
            <button
              className="text-white focus:outline-none"
              onClick={toggleChat}
            >
              <svg
                className="h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M14.12 12l4.24-4.24a.5.5 0 00-.35-.85H4v-.5a.5.5 0 00-.5-.5H1a1 1 0 100 2h2.15l4.24 4.24a.5.5 0 00.85-.36V12h7.77zm4.24 7.78l-1.06 1.06a1 1 0 01-1.42 0l-1.06-1.06a8 8 0 1114.14 0zM12 19a7 7 0 100-14 7 7 0 000 14zm0-2a5 5 0 110-10 5 5 0 010 10z" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 bg-gray-100 overflow-y-auto">
            <div className="mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.isUser ? 'text-right' : 'text-left'
                  } mb-2`}
                >
                  <span
                    className={`${
                      message.isUser ? 'bg-blue-500' : 'bg-gray-300'
                    } inline-block rounded-md py-2 px-4 text-white`}
                  >
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex">
              <input
                className="flex-1 appearance-none border rounded-l-md py-2 px-4 focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-r-md"
                onClick={handleSendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex items-center justify-center">
          <button
            className="text-blue-500 focus:outline-none"
            onClick={toggleChat}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 00-7.37 16.86l-.15.14-3.8 3.79a1 1 0 001.42 1.42l3.79-3.8.14-.15A10 10 0 1012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-8a1 1 0 100 2 1 1 0 000-2zm2-4H9a1 1 0 000 2h4a1 1 0 000-2z" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
