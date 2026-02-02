import { Bot } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="flex gap-3 items-start animate-fade-in">
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
        <Bot className="w-5 h-5" />
      </div>
      <div className="bg-chat-assistant rounded-2xl rounded-tl-md px-4 py-3 border border-border/50">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-typing" style={{ animationDelay: "0ms" }} />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-typing" style={{ animationDelay: "200ms" }} />
          <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-typing" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </div>
  );
}
