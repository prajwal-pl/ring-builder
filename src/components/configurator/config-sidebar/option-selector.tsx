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
    <div className="space-y-2">
      <div className="flex items-center gap-1.5">
        <span className="text-sm font-medium">{label}</span>
        {showInfo && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="size-3.5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{label} options</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      {subtitle && (
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      )}
      <div
        className="flex flex-wrap gap-2"
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
              'px-3 py-2 rounded-md border text-sm transition-colors whitespace-nowrap',
              value === option.id
                ? 'border-primary bg-primary text-primary-foreground'
                : 'border-border hover:border-primary/50 text-muted-foreground hover:text-foreground bg-background'
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
