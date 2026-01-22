'use client';

import { formatPrice } from '@/lib/configurator/pricing';

interface PriceDisplayProps {
  price: number;
}

export function PriceDisplay({ price }: PriceDisplayProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
      <div className="flex items-baseline gap-1.5">
        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground/60 mb-1 sm:mb-0">
          Total Setting
        </span>
        <span className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          {formatPrice(price)}
        </span>
      </div>
      <span className="text-xs font-medium text-muted-foreground/80 bg-secondary/80 px-2 py-0.5 rounded-full border border-border/40 w-fit">
        MSRP (Setting only)
      </span>
    </div>
  );
}
