import { Bot, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatHeader() {
  return (
    <header className="gradient-hero text-primary-foreground px-4 py-5 sm:px-6">
      <div className="flex items-center justify-between max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-lg sm:text-xl font-bold tracking-tight">
              SAIT Assistant
            </h1>
            <p className="text-sm text-white/80">
              Sri Aurobindo Institute of Technology
            </p>
          </div>
        </div>
        <Button
          variant="ghost"
          size="sm"
          asChild
          className="hidden sm:flex gap-2 text-white/90 hover:text-white hover:bg-white/10"
        >
          <a
            href="https://www.aurogroup.ac/technology/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </div>
    </header>
  );
}
