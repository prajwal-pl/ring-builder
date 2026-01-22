import { WizardHeader } from './wizard-header';
import { WizardProgress } from './wizard-progress';

interface WizardStepContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function WizardStepContainer({
  title,
  subtitle,
  children,
}: WizardStepContainerProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/30">
      <WizardHeader />

      <main className="flex-1 flex flex-col items-center px-6 py-8">
        <div className="w-full max-w-md mb-8">
          <WizardProgress />
        </div>

        <div className="text-center space-y-2 mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h1>

          <p className="text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="w-full max-w-6xl">
          {children}
        </div>
      </main>
    </div>
  );
}
