"use client"
import { useRef, useState } from "react"
import SlideOver from "./slide-over"
import { Message, useChat } from "ai/react"
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"

function Messages({ items }: { items: Array<Message> }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li
          key={i}
          className={`flex ${
            item.role === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`p-4 rounded-lg ${
              item.role === "user" ? "bg-blue-100" : "bg-gray-100"
            }`}
          >
            {item.content}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
  })

  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      {open ? null : (
        <button
          className="fixed bottom-4 right-4 p-4 bg-blue-100 rounded-lg border shadow-xl"
          onClick={() => setOpen(true)}
        >
          <span className="flex items-center space-x-2">
            <ChatBubbleLeftRightIcon className="w-8 h-8 text-gray-500" />
            <span className="font-bold text-lg text-gray-800">
              Open Chatbot
            </span>
          </span>
          <span className="text-gray-500 text-xs">Powered by OpenAI</span>
        </button>
      )}

      <SlideOver
        open={open}
        setOpen={setOpen}
        title="ChatBot"
        initialFocus={inputRef}
      >
        <div className="">
          <div className="px-4 sm:px-6 pt-4 pb-24">
            <Messages items={messages} />
          </div>
          <form
            onSubmit={handleSubmit}
            className="border-t px-4 sm:px-6 py-4 flex flex-row items-center absolute bottom-0 inset-x-0 bg-white"
          >
            <div className="absolute top-0 inset-x-0 h-12 bg-gradient-to-b from-white/0 to-white -translate-y-full" />

            <label htmlFor="chatbot-input" className="sr-only">
              Ask a question
            </label>
            <input
              ref={inputRef}
              id="chatbot-input"
              tabIndex={0}
              placeholder="Ask a question..."
              value={input}
              onChange={handleInputChange}
              className="w-full rounded-md border-0 bg-white p-2 text-gray-900 shadow-[0_0_10px_rgba(0,0,0,0.10)] ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 md:p-3 lg:pr-7"
            />
            <button
              type="submit"
              className="ml-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 disabled:hover:bg-transparent"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                className="h-5 w-5 rotate-90 lg:h-4 lg:w-4"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
              </svg>
            </button>
          </form>
        </div>
      </SlideOver>
    </>
  )
}
