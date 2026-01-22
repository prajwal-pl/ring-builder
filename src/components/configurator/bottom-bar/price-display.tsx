'use client';

import { formatPrice } from '@/lib/configurator/pricing';

interface PriceDisplayProps {
  price: number;
}

export function PriceDisplay({ price }: PriceDisplayProps) {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-semibold text-foreground">
        MSRP {formatPrice(price)}
      </span>
      <span className="text-sm text-muted-foreground">
        (Setting only)
      </span>
    </div>
  );
}
