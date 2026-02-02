import { useState, useRef, useEffect } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
}

export function ChatInput({ onSend, disabled, placeholder = "Ask about courses, admissions, campus..." }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const trimmed = input.trim();
    if (trimmed && !disabled) {
      onSend(trimmed);
      setInput("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`;
    }
  }, [input]);

  return (
    <div className="flex items-end gap-2 bg-card border-2 border-primary/20 rounded-2xl p-2 shadow-lg focus-within:border-primary/50 transition-colors">
      <Textarea
        ref={textareaRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={1}
        className="resize-none border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[40px] max-h-[120px] py-2.5 px-3 text-foreground placeholder:text-muted-foreground"
      />
      <Button
        onClick={handleSubmit}
        disabled={disabled || !input.trim()}
        size="icon"
        className="h-10 w-10 rounded-xl gradient-hero hover:opacity-90 transition-opacity flex-shrink-0 shadow-glow"
      >
        {disabled ? (
          <Loader2 className="w-5 h-5 animate-spin text-white" />
        ) : (
          <Send className="w-5 h-5 text-white" />
        )}
      </Button>
    </div>
  );
}
