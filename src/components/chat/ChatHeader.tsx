import { Bot, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ChatHeader() {
  return (
    <header className="bg-secondary text-secondary-foreground">
      {/* Top bar */}
      <div className="bg-secondary/95 border-b border-white/10 px-4 py-2 text-sm hidden sm:block">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <span className="text-white/80">
            APPLICATIONS INVITED FOR ADMISSION IN 2026-27.{" "}
            <a 
              href="https://www.aurogroup.ac/technology/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:underline"
            >
              APPLY NOW
            </a>
          </span>
          <a 
            href="tel:+919685026677" 
            className="flex items-center gap-1 text-white/80 hover:text-white"
          >
            <Phone className="w-3 h-3" />
            Call Us
          </a>
        </div>
      </div>
      
      {/* Main header */}
      <div className="px-4 py-4 sm:px-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center shadow-glow">
              <Bot className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                Sri Aurobindo
              </h1>
              <p className="text-sm text-primary font-medium">
                Institute of Technology
              </p>
            </div>
          </div>
          
          <Button
            size="sm"
            asChild
            className="gradient-hero text-white border-0 hover:opacity-90 gap-2 rounded-full px-5 shadow-glow animate-pulse-glow"
          >
            <a
              href="https://www.aurogroup.ac/technology/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Admissions Helpline</span>
              <span className="font-bold">+91 96850 26677</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
