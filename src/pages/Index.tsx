import { useRef, useEffect } from "react";
import { ChatHeader } from "@/components/chat/ChatHeader";
import { ChatMessage } from "@/components/chat/ChatMessage";
import { ChatInput } from "@/components/chat/ChatInput";
import { QuickActions } from "@/components/chat/QuickActions";
import { TypingIndicator } from "@/components/chat/TypingIndicator";
import { WelcomeMessage } from "@/components/chat/WelcomeMessage";
import { useChat } from "@/hooks/useChat";
import { RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const hasMessages = messages.length > 0;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <ChatHeader />

      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto">
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-thin">
          {!hasMessages && (
            <>
              <WelcomeMessage />
              <div className="pt-4">
                <p className="text-center text-sm text-muted-foreground mb-4">
                  Quick questions to get started:
                </p>
                <QuickActions onSelect={sendMessage} disabled={isLoading} />
              </div>
            </>
          )}

          {messages.map((message, index) => (
            <ChatMessage
              key={message.id}
              message={message}
              isLatest={index === messages.length - 1 && message.role === "assistant"}
            />
          ))}

          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <TypingIndicator />
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="sticky bottom-0 bg-background/80 backdrop-blur-sm border-t border-border/50 px-4 py-4">
          {hasMessages && (
            <div className="flex justify-center mb-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={clearMessages}
                className="text-muted-foreground hover:text-foreground gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                New conversation
              </Button>
            </div>
          )}
          <ChatInput onSend={sendMessage} disabled={isLoading} />
          <p className="text-center text-xs text-muted-foreground mt-3">
            Admissions Helpline: +91 96850 26677 •{" "}
            <a
              href="https://www.aurogroup.ac/technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Official Website
            </a>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Index;
