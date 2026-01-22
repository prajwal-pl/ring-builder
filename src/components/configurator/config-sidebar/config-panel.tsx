'use client';

import { ChevronDown } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { cn } from '@/lib/utils';

interface ConfigPanelProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function ConfigPanel({ title, isOpen, onToggle, children }: ConfigPanelProps) {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle} className="group mx-4 my-2 first:mt-4 last:mb-4">
      <CollapsibleTrigger className={cn(
        "flex w-full items-center justify-between px-5 py-4 transition-all duration-300 rounded-2xl border border-transparent",
        isOpen 
          ? "bg-white shadow-sm border-border/20" 
          : "hover:bg-white/50"
      )}>
        <span className={cn(
          "text-sm font-bold tracking-tight transition-colors duration-200",
          isOpen ? "text-primary" : "text-foreground/60 group-hover:text-foreground"
        )}>{title}</span>
        <div className={cn(
          "p-1.5 rounded-full transition-all duration-300",
          isOpen ? "bg-primary text-primary-foreground rotate-180 shadow-md shadow-primary/20" : "bg-secondary text-muted-foreground group-hover:text-foreground"
        )}>
          <ChevronDown className="size-3.5" />
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 px-5 py-5 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-top-2 data-[state=open]:slide-in-from-top-2 duration-300">
        <div className="max-h-[50vh] overflow-y-auto pr-1 custom-scrollbar">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
