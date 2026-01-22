import type { StoneShapeOption } from '@/types/wizard';

// Simple SVG diamond shape icons
const RoundIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="24" r="16" />
    <path d="M24 8v32M8 24h32M12 12l24 24M36 12L12 36" opacity="0.5" />
  </svg>
);

const OvalIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="24" cy="24" rx="12" ry="18" />
    <path d="M24 6v36M12 24h24" opacity="0.5" />
  </svg>
);

const CushionIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="32" height="32" rx="8" />
    <path d="M24 8v32M8 24h32" opacity="0.5" />
  </svg>
);

const EmeraldIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 8h24l4 6v20l-4 6H12l-4-6V14l4-6z" />
    <path d="M8 14h32M8 34h32M16 8v32M32 8v32" opacity="0.5" />
  </svg>
);

const PrincessIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="32" height="32" />
    <path d="M8 8l32 32M40 8L8 40M24 8v32M8 24h32" opacity="0.5" />
  </svg>
);

const AsscherIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 8h20l6 6v20l-6 6H14l-6-6V14l6-6z" />
    <rect x="16" y="16" width="16" height="16" opacity="0.5" />
  </svg>
);

const MarquiseIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="24" cy="24" rx="8" ry="20" />
    <path d="M24 4v40M16 24h16" opacity="0.5" />
  </svg>
);

const PearIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M24 6c-8 0-14 10-14 22 0 8 6 14 14 14s14-6 14-14c0-12-6-22-14-22z" />
    <path d="M24 6v38M10 28h28" opacity="0.5" />
  </svg>
);

const RadiantIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M14 8h20l6 6v20l-6 6H14l-6-6V14l6-6z" />
    <path d="M8 14l16 10-16 10M40 14L24 24l16 10M14 8l10 16-10 16M34 8L24 24l10 16" opacity="0.5" />
  </svg>
);

export const stoneShapes: StoneShapeOption[] = [
  {
    id: 'round',
    label: 'Round',
    description: 'The most brilliant cut',
    icon: RoundIcon,
  },
  {
    id: 'oval',
    label: 'Oval',
    description: 'Elongates the finger',
    icon: OvalIcon,
  },
  {
    id: 'cushion',
    label: 'Cushion',
    description: 'Classic with soft corners',
    icon: CushionIcon,
  },
  {
    id: 'emerald',
    label: 'Emerald',
    description: 'Step-cut for clarity',
    icon: EmeraldIcon,
  },
  {
    id: 'princess',
    label: 'Princess',
    description: 'Square with sharp corners',
    icon: PrincessIcon,
  },
  {
    id: 'asscher',
    label: 'Asscher',
    description: 'Step-cut with square shape',
    icon: AsscherIcon,
  },
  {
    id: 'marquise',
    label: 'Marquise',
    description: 'Elongated with pointed ends',
    icon: MarquiseIcon,
  },
  {
    id: 'pear',
    label: 'Pear',
    description: 'Combines round and marquise',
    icon: PearIcon,
  },
  {
    id: 'radiant',
    label: 'Radiant',
    description: 'Square with brilliant cut',
    icon: RadiantIcon,
  },
];
