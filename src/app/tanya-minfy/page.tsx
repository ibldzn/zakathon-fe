"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface IChat {
  text: string;
  isUser: boolean;
}

const Chat = ({ text, isUser }: IChat) => {
  return (
    <div
      className={`${
        isUser ? "bg-[#74C0B9]" : "bg-[#0F84A7]"
      } text-white p-4 rounded-lg w-3/4`}
    >
      {text}
    </div>
  );
};

const TanyaMinify = () => {
  const [chats, setChats] = useState<IChat[]>([
    {
      text: "Halo, ada yang bisa Minfy bantu?",
      isUser: false,
    },
  ]);
  const [question, setQuestion] = useState("");
  const chatContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainer.current) {
      chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
    }
  }, [chats]);

  return (
    <div className="w-full h-full flex items-center flex-col gap-4 p-4 bg-[#EFFFF8]">
      <div className="w-full flex justify-between items-center">
        <Link href="/" className="text-left">
          <ArrowLeft size={48} />
        </Link>
        <span className="text-center uppercase text-3xl font-semibold">
          Tanya MINFY
        </span>
        <div />
      </div>
      <div className="w-full h-3/4 flex justify-around">
        <div className="relative">
          <Image
            src="/bookmark.png"
            alt="Bookmark"
            width={75}
            height={75}
            className="absolute top-0 left-14 z-10"
          />
          <Image
            src="/solve.png"
            alt="Solve"
            width={75}
            height={75}
            className="absolute bottom-20 left-24 z-10"
          />
          <Image
            src="/hijab-notebook.png"
            alt="Notebook"
            width={150}
            height={300}
            className="relative z-50"
          />
        </div>

        <div className="flex flex-col w-1/2 gap-2 border border-[#9AD9D4] rounded-lg overflow-hidden">
          <div
            ref={chatContainer}
            className="flex flex-col gap-2 overflow-y-auto"
          >
            {chats.map((chat, index) => (
              <div
                key={`chat-${index}`}
                className={`${
                  chat.isUser ? "bg-[#74C0B9]" : "bg-[#0F84A7] self-end"
                } text-white p-4 rounded-lg w-3/4`}
              >
                {chat.text}
              </div>
            ))}
          </div>
          <input
            type="text"
            className="p-4 mt-auto"
            placeholder="Tulis pertanyaanmu disini"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                setChats((prev) => [...prev, { text: question, isUser: true }]);
                setQuestion("");
              }
            }}
          />
        </div>

        <div className="relative">
          <Image
            src="/solve.png"
            alt="Solve"
            width={75}
            height={75}
            className="absolute top-0 left-14 z-10"
          />
          <Image
            src="/ask.png"
            alt="Ask"
            width={75}
            height={75}
            className="absolute bottom-20 left-24 z-10"
          />
          <Image
            src="/idea-boy.png"
            alt="Boy with Idea"
            width={175}
            height={3000}
            className="relative z-50"
          />
        </div>
      </div>
    </div>
  );
};

export default TanyaMinify;
