import { GraduationCap, Building2, Users, BookOpen, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface QuickActionsProps {
  onSelect: (question: string) => void;
  disabled?: boolean;
}

const quickActions = [
  {
    icon: GraduationCap,
    label: "Courses",
    question: "What courses are offered at SAIT?",
  },
  {
    icon: BookOpen,
    label: "Admissions",
    question: "How can I apply for admission at SAIT?",
  },
  {
    icon: Users,
    label: "Placements",
    question: "Tell me about placements at SAIT",
  },
  {
    icon: Building2,
    label: "Campus",
    question: "What facilities does the SAIT campus offer?",
  },
  {
    icon: MapPin,
    label: "Location",
    question: "Where is Sri Aurobindo Institute of Technology located?",
  },
  {
    icon: Phone,
    label: "Contact",
    question: "How can I contact the admissions office?",
  },
];

export function QuickActions({ onSelect, disabled }: QuickActionsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {quickActions.map((action) => (
        <Button
          key={action.label}
          variant="outline"
          size="sm"
          onClick={() => onSelect(action.question)}
          disabled={disabled}
          className="gap-2 rounded-full border-primary/40 bg-accent/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 font-medium"
        >
          <action.icon className="w-4 h-4" />
          {action.label}
        </Button>
      ))}
    </div>
  );
}
