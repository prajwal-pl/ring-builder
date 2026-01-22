'use client';

import { cn } from '@/lib/utils';
import type { SelectionOption } from '@/types/wizard';
import { Check } from 'lucide-react';

interface SelectionCardProps<T> {
  option: SelectionOption<T>;
  isSelected: boolean;
  onSelect: (id: T) => void;
  variant?: 'default' | 'compact';
}

export function SelectionCard<T>({
  option,
  isSelected,
  onSelect,
  variant = 'default',
}: SelectionCardProps<T>) {
  return (
    <button
      type="button"
      onClick={() => onSelect(option.id)}
      className={cn(
        'group relative flex flex-col items-center justify-center rounded-2xl border transition-all duration-300',
        'hover:border-primary/50 hover:shadow-xl hover:-translate-y-0.5',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/20',
        isSelected
          ? 'border-primary bg-primary/5 shadow-lg ring-1 ring-primary/20'
          : 'border-border bg-card shadow-sm hover:shadow-md',
        variant === 'default' ? 'p-6 min-h-[160px]' : 'p-4 min-h-[70px]'
      )}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 bg-primary text-primary-foreground rounded-full p-0.5 shadow-sm animate-in zoom-in duration-200">
          <Check className="size-3" />
        </div>
      )}

      {option.icon && variant === 'default' && (
        <div className={cn(
          "w-14 h-14 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110",
          isSelected ? "text-primary" : "text-muted-foreground"
        )}>
          {option.icon}
        </div>
      )}

      <span
        className={cn(
          'font-semibold transition-colors duration-200',
          variant === 'default' ? 'text-base' : 'text-sm',
          isSelected ? 'text-primary' : 'text-foreground'
        )}
      >
        {option.label}
      </span>
      
      {option.description && variant === 'default' && (
        <span className={cn(
          "text-xs mt-2 text-center transition-colors duration-200",
          isSelected ? "text-primary/70" : "text-muted-foreground"
        )}>
          {option.description}
        </span>
      )}
    </button>
  );
}
