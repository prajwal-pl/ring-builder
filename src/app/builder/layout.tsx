import { WizardProvider } from '@/lib/wizard/context';

export default function BuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WizardProvider>
      <div className="min-h-screen bg-zinc-100">{children}</div>
    </WizardProvider>
  );
}
