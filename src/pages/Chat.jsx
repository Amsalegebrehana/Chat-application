import React, { useState } from "react";
import NavBar from "../components/NavBar";
import DesktopSidebar from "../components/Conversations";

const Chat = () => {
  const [conversations, setConversations] = useState([
    {
      id: 1,
      messages: [
        { type: "chatbot", text: "Hi there! How can I assist you today?" },
        { type: "user", text: "I have a question about my account." },
        {
          type: "chatbot",
          text: "Sure, I'm here to help. What do you need assistance with?",
        },
      ],
    },
    {
      id: 2,
      messages: [
        {
          type: "chatbot",
          text: "I'm sorry, I don't have access to real-time weather information.",
        },
      ],
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [selectedConversationId, setSelectedConversationId] = useState(1);

  const handleDeleteConversation = (conversationId) => {
    setConversations((prevConversations) =>
      prevConversations.filter((conv) => conv.id !== conversationId)
    );
  };
  const handleSendMessage = () => {
    if (!inputText.trim()) {
      return;
    }

    if (selectedConversationId) {
      setConversations((prevConversations) =>
        prevConversations.map((conv) =>
          conv.id === selectedConversationId
            ? {
                ...conv,
                messages: [
                  ...conv.messages,
                  { type: "user", text: inputText.trim() },
                ],
              }
            : conv
        )
      );
    } else {
      const newConversation = {
        id: Date.now(),
        messages: [{ type: "user", text: inputText.trim() }],
      };
      setConversations((prevConversations) => [
        ...prevConversations,
        newConversation,
      ]);
      setSelectedConversationId(newConversation.id);
    }
    setInputText("");
  };

  const handleSelectConversation = (conversationId) => {
    setSelectedConversationId(conversationId);
    setInputText("");
    setSelectedOption("");
  };

  const handleAddNewConversation = () => {
    const newConversation = {
      id: Date.now(),
      messages: [{ type: "chatbot", text: "Welcome to the new conversation!" }],
    };
    setConversations((prevConversations) => [
      ...prevConversations,
      newConversation,
    ]);
    setSelectedConversationId(newConversation.id);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelected = (option) => {
    setSelectedOption(option);
    setInputText(option);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-y-auto">
      <NavBar />
      <div className="flex lg:flex-row flex-col h-full">
        <DesktopSidebar
          conversations={conversations}
          onDeleteConversation={handleDeleteConversation}
          onSelectConversation={handleSelectConversation}
          onAddNewConversation={handleAddNewConversation}
        />

        <div className="flex-1  p-4 flex flex-col h-full ">
          <div className="felx flex-col border border-gray-light rounded-lg">
            <div className="flex flex-row rounded-t-lg bg-blue text-white items-center py-4">
              <img
                className="h-10 w-10 rounded-full mx-4"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <h1>Chat bot</h1>
            </div>
            <div className="flex flex-col space-y-2 h-full flex-1 ">
              {selectedConversationId && (
                <div className="flex flex-col space-y-2 w-full p-6 ">
                  {conversations
                    .filter((conv) => conv.id === selectedConversationId)
                    .map((conv) => (
                      <div key={conv.id} className="mb-4">
                        {conv.messages.map((msg, index) => (
                          <div
                            key={index}
                            className={`${
                              msg.type === "user"
                                ? "bg-purple ml-auto text-white "
                                : "bg-light-blue text-blue"
                            } p-2 px-4 rounded-full w-2/3 my-2 `}
                          >
                            {msg.text}
                          </div>
                        ))}
                      </div>
                    ))}
                </div>
              )}
            </div>
            <div className="mt-auto">
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 my-8 mx-6">
                {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                  (option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelected(option)}
                      className={`${
                        selectedOption === option
                          ? "bg-purple text-white"
                          : "text-purple"
                      } px-2 py-1 border border-purple rounded-full`}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="relative mt-8 flex items-end">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 border border-gray-extralight w-full rounded-full p-4 shadow-lg focus:outline-none focus:border-transparent"
              placeholder="Reply to chatbot"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-0 top-0 bg-purple text-white rounded-full p-2 m-2 focus:outline-none transition duration-300 text-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Chat;
