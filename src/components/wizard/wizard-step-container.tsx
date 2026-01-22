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
    <div className="min-h-screen flex flex-col">
      <WizardHeader />

      <main className="flex-1 flex flex-col items-center px-4 py-8">
        <WizardProgress />

        <h1 className="mt-4 text-2xl md:text-3xl font-semibold text-zinc-900 text-center">
          {title}
        </h1>

        <p className="mt-2 text-sm md:text-base text-zinc-500 text-center max-w-md">
          {subtitle}
        </p>

        <div className="mt-8 w-full max-w-4xl">{children}</div>
      </main>
    </div>
  );
}
