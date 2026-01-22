'use client';

import { cn } from '@/lib/utils';
import { SelectionCard } from './selection-card';
import type { SelectionOption } from '@/types/wizard';

interface SelectionGridProps<T> {
  options: SelectionOption<T>[];
  selectedId: T | null;
  onSelect: (id: T) => void;
  columns?: 2 | 3;
  variant?: 'default' | 'compact';
}

export function SelectionGrid<T>({
  options,
  selectedId,
  onSelect,
  columns = 3,
  variant = 'default',
}: SelectionGridProps<T>) {
  return (
    <div
      className={cn('grid gap-6 w-full max-w-5xl mx-auto p-2', {
        'grid-cols-1 sm:grid-cols-2 max-w-2xl': columns === 2,
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      })}
    >
      {options.map((option, index) => (
        <div 
          key={String(option.id)}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <SelectionCard
            option={option}
            isSelected={selectedId === option.id}
            onSelect={onSelect}
            variant={variant}
          />
        </div>
      ))}
    </div>
  );
}
