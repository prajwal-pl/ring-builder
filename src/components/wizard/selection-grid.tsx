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
      className={cn('grid gap-4', {
        'grid-cols-1 sm:grid-cols-2': columns === 2,
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      })}
    >
      {options.map((option) => (
        <SelectionCard
          key={String(option.id)}
          option={option}
          isSelected={selectedId === option.id}
          onSelect={onSelect}
          variant={variant}
        />
      ))}
    </div>
  );
}
