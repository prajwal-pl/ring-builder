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
    <header className="flex items-center justify-between px-4 py-3 bg-muted/50">
      <div className="flex items-center gap-2">
        {canGoBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            className="gap-1"
          >
            <ChevronLeft className="size-4" />
            Back
          </Button>
        )}

        {breadcrumbs.length > 0 && (
          <Breadcrumb className="ml-2">
            <BreadcrumbList>
              {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={index}>
                  {index > 0 && <BreadcrumbSeparator />}
                  <BreadcrumbPage className="flex items-center gap-1.5 px-2 py-1 bg-background rounded-md shadow-sm">
                    {crumb.icon && (
                      <span className="size-4 text-muted-foreground">{crumb.icon}</span>
                    )}
                    {crumb.label}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
      </div>

      <Button
        variant="ghost"
        size="sm"
        onClick={skip}
        className="text-muted-foreground"
      >
        Skip
      </Button>
    </header>
  );
}
