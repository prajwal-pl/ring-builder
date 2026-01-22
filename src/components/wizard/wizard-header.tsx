'use client';

import { ChevronLeft } from 'lucide-react';
import { useWizard } from '@/hooks/use-wizard';
import { useWizardNavigation } from '@/hooks/use-wizard-navigation';
import { Button } from '@/components/ui/button';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ringStyles } from '@/data/wizard/ring-styles';
import { stoneShapes } from '@/data/wizard/stone-shapes';
import { caratSizes } from '@/data/wizard/carat-sizes';

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
    <header className="flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/40">
      <div className="flex items-center gap-4">
        {canGoBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            className="gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ChevronLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="text-sm font-medium">Back</span>
          </Button>
        )}

        {breadcrumbs.length > 0 && (
          <Breadcrumb className="hidden md:block">
            <BreadcrumbList className="gap-1 sm:gap-2">
              {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={index} className="flex items-center">
                  {index > 0 && <BreadcrumbSeparator className="mx-1" />}
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary/50 text-secondary-foreground text-xs font-medium border border-border/50">
                    {crumb.icon && (
                      <span className="size-3.5 opacity-70">{crumb.icon}</span>
                    )}
                    {crumb.label}
                  </div>
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="sm"
          onClick={skip}
          className="text-muted-foreground hover:text-foreground text-xs font-medium"
        >
          Skip this step
        </Button>
      </div>
    </header>
  );
}
