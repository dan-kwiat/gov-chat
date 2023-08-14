"use client"
import { useState } from "react"
import SlideOver from "./slide-over"

function Messages({
  items,
}: {
  items: Array<{ role: "user" | "assistant"; content: string }>
}) {
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

  return (
    <>
      {open ? null : (
        <button
          className="absolute bottom-4 right-4 p-4 bg-white rounded-lg border shadow-xl"
          onClick={() => setOpen(true)}
        >
          Open chatbot
        </button>
      )}

      <SlideOver open={open} setOpen={setOpen} title="ChatBot">
        <div className="mt-4">
          <Messages
            items={[
              { role: "assistant", content: "Hello, how can I help you?" },
              { role: "user", content: "I need help with my order" },
            ]}
          />
        </div>
      </SlideOver>
    </>
  )
}
