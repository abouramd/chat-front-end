"use client";

import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const ChatComponent = ({ messages }) => {
  const containerRef = useRef(null); // Ref to scroll container

  // Define the formatDate function outside of the JSX but within the component
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString("en-US", {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const scrollToBottom = () => {
    containerRef?.current?.scrollIntoView(false);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col" ref={containerRef}>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`p-2 pt-0 max-w-[300px] w-fit ${message.sender === "You" ? "text-right self-end" : "text-left self-start"}`}
        >
          <div className="font-semibold">{message.sender}</div>
          <div
            className={`border rounded-md p-2 h-fit break-words ${message.sender === "You" ? "bg-blue-300" : "bg-green-300"}`}
          >
            {message.text}
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-200">
            {formatDate(message.timestamp)}
          </div>
        </div>
      ))}
    </div>
  );
};

const ChatPage = ({
  id,
  oldMessages,
}: {
  id: string;
  oldMessages: {
    sender: string;
    text: string;
    timestamp: string;
  }[];
}) => {
  const [messages, setMessages] = useState(oldMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "You",
          text: newMessage,
          timestamp: new Date(),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <Card className="w-full h-full flex flex-col">
      {/* Header */}
      <CardHeader className="flex flex-row justify-between items-center p-4 border-b">
        <div className="flex items-center space-x-4">
          <Link href="/chat/">
            <Button variant="outline">Back</Button>
          </Link>
          <h1 className="text-lg font-bold">Chat {id}</h1>
        </div>
        <Button variant="destructive" onClick={() => {}}>
          Leave
        </Button>
      </CardHeader>

      {/* Chat Box */}
      <CardContent className="p-2 h-full overflow-auto">
        <ScrollArea className="p-2 h-full overflow-y-auto scroll-smooth">
          <ChatComponent messages={messages} />
        </ScrollArea>
      </CardContent>

      {/* Input Box */}
      <CardFooter className="p-4 border-t flex space-x-2">
        <Input
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </CardFooter>
    </Card>
  );
};

export default ChatPage;
