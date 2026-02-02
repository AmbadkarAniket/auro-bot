import { Bot, Sparkles, GraduationCap } from "lucide-react";

export function WelcomeMessage() {
  return (
    <div className="text-center py-8 px-4 animate-fade-in">
      <div className="w-24 h-24 rounded-full gradient-hero mx-auto mb-6 flex items-center justify-center shadow-glow">
        <GraduationCap className="w-12 h-12 text-white" />
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
        Lead The Future of <span className="text-primary">Engineering</span>
      </h2>
      <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
        Innovation With <span className="text-primary">SAIT</span>
      </h3>
      <p className="text-muted-foreground mb-6 max-w-md mx-auto">
        Where Technology Meets Creativity and Excellence. Ask me about courses, admissions, placements, and campus life!
      </p>
      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-accent rounded-full px-5 py-2.5 shadow-sm">
        <Sparkles className="w-4 h-4" />
        <span>Admissions Open 2026-27</span>
      </div>
    </div>
  );
}
