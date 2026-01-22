'use client';

import { cn } from '@/lib/utils';
import type { SelectionOption } from '@/types/wizard';

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
        'flex flex-col items-center justify-center rounded-xl border-2 transition-all',
        'hover:border-zinc-400 hover:shadow-md',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400',
        isSelected
          ? 'border-zinc-900 bg-zinc-50 shadow-md'
          : 'border-zinc-200 bg-white',
        variant === 'default' ? 'p-4 min-h-[140px]' : 'p-3 min-h-[60px]'
      )}
    >
      {option.icon && variant === 'default' && (
        <div className="w-12 h-12 mb-3 flex items-center justify-center text-zinc-600">
          {option.icon}
        </div>
      )}
      <span
        className={cn(
          'font-medium text-zinc-900',
          variant === 'default' ? 'text-sm' : 'text-sm'
        )}
      >
        {option.label}
      </span>
      {option.description && variant === 'default' && (
        <span className="text-xs text-zinc-500 mt-1 text-center">
          {option.description}
        </span>
      )}
    </button>
  );
}
