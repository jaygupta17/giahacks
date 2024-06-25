"use client";
import React, { useState, useEffect } from "react";
import { textTotext } from "../../utils/gemini";
import {
  Bot,
  BotMessageSquareIcon,
  MessageSquareReply,
  MicIcon,
  UserSquare,
} from "lucide-react";

type ChatHistoryType = { userMessage: string; llmMessage: string };

export default function AI() {
  const [data, setData] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatHistoryType[]>([]);

  const handleChatResponse = async () => {
    const llmResponse = await textTotext(data);
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { userMessage: data, llmMessage: llmResponse },
    ]);
    setData("");
  };

  return (
    <>
      <div className="container relative h-[130vh] flex justify-center items-center overflow-hidden flex-col gap-2">
        <div className="h-[75%] w-[80%] bg-[#464545] rounded-lg text-black text-2xl pt-[rem] font-sans flex justify-center bottom-[18%] right-[3%]">
          <div className="flex flex-col gap-2 font-sans w-[90%]">
            <div className="ml-1.5 h-[90%] w-[100%] rounded-md text-white text-sm">
              {chatHistory.map((message, index) => (
                <div key={index}>
                  <div className="mb-3 pt-4 flex">
                    <span className="text-blue-500">
                      <UserSquare className="h-[8vh] w-[7vh]" />
                    </span>
                    <div className="bg-black h-[10vh] w-[35vw] rounded-md p-4 ml-2">
                      {message.userMessage}
                    </div>
                  <div className="text-white float-right flex mt-[9%] gap-3">
                    <div className="bg-[#b2468cdb] h-auto w-[35vw] rounded-md p-4">
                      {message.llmMessage}
                    </div>
                    <span className="text-blue-500 text-md">
                      <Bot className="h-[8vh] w-[8vh]" />
                    </span>
                  </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className="flex w-[80%] ">
          <div className="flex gap-2 w-[100%]">
            <input
              className="w-[100%] rounded-md text-white pl-1 text-sm"
              placeholder="Type your message..."
              type="text"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
            <button
              className="bg-cyan-500 w-[3%] rounded-md text-sm p-1"
              onClick={handleChatResponse}
            >
              <MessageSquareReply />
            </button>
          </div>
          </div>
      </div>
    </>
  );
}
