import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

interface ChatMessageProps {
  message: Message;
  isLatest?: boolean;
}

export function ChatMessage({ message, isLatest }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div
      className={cn(
        "flex gap-3 animate-slide-up",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div
        className={cn(
          "flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md",
          isUser
            ? "gradient-hero text-white"
            : "bg-secondary text-secondary-foreground"
        )}
      >
        {isUser ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
      </div>

      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-4 py-3",
          isUser
            ? "gradient-hero text-white rounded-tr-md shadow-glow"
            : "bg-chat-assistant text-chat-assistant-foreground rounded-tl-md border border-border shadow-sm"
        )}
      >
        {isUser ? (
          <p className="text-sm leading-relaxed">{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none dark:prose-invert prose-p:leading-relaxed prose-p:my-1 prose-ul:my-1 prose-li:my-0 prose-headings:my-2 prose-headings:font-semibold">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {message.content || (isLatest ? "..." : "")}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
}
