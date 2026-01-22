'use client';

import { useWizard } from '@/hooks/use-wizard';
import { useWizardNavigation } from '@/hooks/use-wizard-navigation';
import { cn } from '@/lib/utils';
import { ringStyles } from '@/data/wizard/ring-styles';
import { stoneShapes } from '@/data/wizard/stone-shapes';
import { caratSizes } from '@/data/wizard/carat-sizes';

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

export function WizardHeader() {
  const { state } = useWizard();
  const { goBack, skip, canGoBack } = useWizardNavigation();
  const { selections } = state;

  const breadcrumbs: { label: string; icon?: React.ReactNode }[] = [];

  if (selections.ringStyle) {
    const style = ringStyles.find((s) => s.id === selections.ringStyle);
    if (style) {
      breadcrumbs.push({ label: style.label, icon: style.icon });
    }
  }

  if (selections.stoneShape) {
    const shape = stoneShapes.find((s) => s.id === selections.stoneShape);
    if (shape) {
      breadcrumbs.push({ label: shape.label, icon: shape.icon });
    }
  }

  if (selections.caratSize && selections.caratSize !== 'decide-later') {
    const size = caratSizes.find((s) => s.id === selections.caratSize);
    if (size) {
      breadcrumbs.push({ label: size.displayValue });
    }
  }

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-zinc-100">
      <div className="flex items-center gap-2">
        {canGoBack && (
          <button
            onClick={goBack}
            className={cn(
              'flex items-center gap-1 px-3 py-1.5 rounded-lg',
              'text-sm text-zinc-600 hover:text-zinc-900',
              'hover:bg-zinc-200/50 transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-zinc-400'
            )}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            <span>Back</span>
          </button>
        )}

        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-1 ml-2">
            {breadcrumbs.map((crumb, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-lg text-sm text-zinc-700 shadow-sm"
              >
                {crumb.icon && (
                  <span className="w-4 h-4 text-zinc-500">{crumb.icon}</span>
                )}
                <span>{crumb.label}</span>
              </div>
            ))}
          </nav>
        )}
      </div>

      <button
        onClick={skip}
        className={cn(
          'text-sm text-zinc-500 hover:text-zinc-900 transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-zinc-400 rounded px-2 py-1'
        )}
      >
        Skip
      </button>
    </header>
  );
}
