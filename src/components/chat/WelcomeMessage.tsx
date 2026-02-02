import { Bot, Sparkles } from "lucide-react";

export function WelcomeMessage() {
  return (
    <div className="text-center py-8 px-4 animate-fade-in">
      <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
        <Bot className="w-10 h-10 text-white" />
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        Welcome to SAIT! 👋
      </h2>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        I'm your AI assistant for Sri Aurobindo Institute of Technology, Indore. 
        Ask me about courses, admissions, placements, campus life, and more!
      </p>
      <div className="inline-flex items-center gap-2 text-sm text-primary bg-accent rounded-full px-4 py-2">
        <Sparkles className="w-4 h-4" />
        <span>Admissions Open 2026-27</span>
      </div>
    </div>
  );
}
