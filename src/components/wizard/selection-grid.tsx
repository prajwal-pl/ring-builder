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
      className={cn('grid gap-4 w-full justify-center mx-auto', {
        'grid-cols-1 sm:grid-cols-2 max-w-lg': columns === 2,
        'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 max-w-6xl': columns === 3,
      })}
    >
      {options.map((option, index) => (
        <div 
          key={String(option.id)}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both w-full flex justify-center"
          style={{ animationDelay: `${index * 40}ms` }}
        >
          <div className="w-full max-w-[220px]">
            <SelectionCard
              option={option}
              isSelected={selectedId === option.id}
              onSelect={onSelect}
              variant={variant}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
