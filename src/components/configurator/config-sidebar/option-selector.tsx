'use client';

import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Option<T extends string> {
  id: T;
  label: string;
}

interface OptionSelectorProps<T extends string> {
  label: string;
  subtitle?: string;
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  showInfo?: boolean;
  columns?: number;
}

export function OptionSelector<T extends string>({
  label,
  subtitle,
  options,
  value,
  onChange,
  showInfo = true,
  columns,
}: OptionSelectorProps<T>) {
  const gridCols = columns || (options.length <= 2 ? 2 : options.length <= 3 ? 3 : 4);

  return (
    <div className="space-y-4 animate-in fade-in duration-500">
      <div className="flex flex-col gap-1 px-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary/80">{label}</span>
            {showInfo && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="p-0.5 rounded-full hover:bg-primary/5 transition-colors cursor-help">
                      <Info className="size-2.5 text-muted-foreground" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="right" className="bg-background/95 backdrop-blur-md border-primary/20">
                    <p className="text-[10px] font-medium">{label} options</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
          {value && (
            <span className="text-[10px] font-bold text-primary/40 bg-primary/5 px-2 py-0.5 rounded-full border border-primary/10">
              {options.find(o => o.id === value)?.label}
            </span>
          )}
        </div>
        {subtitle && (
          <p className="text-[11px] leading-relaxed text-muted-foreground/70 font-medium italic">{subtitle}</p>
        )}
      </div>
      <div
        className="gap-2.5"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`,
        }}
      >
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onChange(option.id)}
            className={cn(
              'px-2 py-3 rounded-xl border text-[11px] font-bold transition-all duration-300 text-center relative overflow-hidden group',
              value === option.id
                ? 'border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]'
                : 'border-border/40 bg-white/50 hover:border-primary/30 hover:bg-white text-muted-foreground hover:text-foreground hover:shadow-md'
            )}
          >
            {value === option.id && (
              <span className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent animate-pulse" />
            )}
            <span className="relative z-10 truncate block w-full tracking-tight">
              {option.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
