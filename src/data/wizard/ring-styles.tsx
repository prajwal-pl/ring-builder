import type { RingStyleOption } from '@/types/wizard';

// Simple SVG ring icons for each style
const SolitaireIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="14" r="6" />
    <path d="M18 20v20a2 2 0 002 2h8a2 2 0 002-2V20" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

const HaloIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="14" r="5" />
    <circle cx="24" cy="14" r="9" strokeDasharray="2 2" />
    <path d="M18 20v20a2 2 0 002 2h8a2 2 0 002-2V20" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

const HiddenHaloIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="14" r="6" />
    <path d="M18 18h12" strokeDasharray="2 2" />
    <path d="M18 20v20a2 2 0 002 2h8a2 2 0 002-2V20" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

const BezelIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="14" r="6" />
    <rect x="16" y="8" width="16" height="12" rx="2" />
    <path d="M18 20v20a2 2 0 002 2h8a2 2 0 002-2V20" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

const CathedralIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="12" r="5" />
    <path d="M19 17c-3 3-3 8-3 15a2 2 0 002 2h12a2 2 0 002-2c0-7 0-12-3-15" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

const FullPaveIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="14" r="6" />
    <path d="M18 20v20a2 2 0 002 2h8a2 2 0 002-2V20" />
    <circle cx="20" cy="26" r="1.5" />
    <circle cx="28" cy="26" r="1.5" />
    <circle cx="20" cy="32" r="1.5" />
    <circle cx="28" cy="32" r="1.5" />
    <circle cx="20" cy="38" r="1.5" />
    <circle cx="28" cy="38" r="1.5" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

const ToiEtMoiIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="18" cy="14" r="5" />
    <circle cx="30" cy="14" r="5" />
    <path d="M16 20v20a2 2 0 002 2h12a2 2 0 002-2V20" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

const ThreeStoneIcon = (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="24" cy="12" r="6" />
    <circle cx="14" cy="16" r="3" />
    <circle cx="34" cy="16" r="3" />
    <path d="M16 20v20a2 2 0 002 2h12a2 2 0 002-2V20" />
    <ellipse cx="24" cy="42" rx="10" ry="3" />
  </svg>
);

export const ringStyles: RingStyleOption[] = [
  {
    id: 'solitaire',
    label: 'Solitaire',
    description: 'Timeless and elegant',
    icon: SolitaireIcon,
  },
  {
    id: 'halo',
    label: 'Halo',
    description: 'Captivating and radiant',
    icon: HaloIcon,
  },
  {
    id: 'hidden-halo',
    label: 'Hidden Halo',
    description: 'Subtle yet brilliant',
    icon: HiddenHaloIcon,
  },
  {
    id: 'bezel',
    label: 'Bezel',
    description: 'Sleek and contemporary',
    icon: BezelIcon,
  },
  {
    id: 'cathedral',
    label: 'Cathedral',
    description: 'Elevated and graceful',
    icon: CathedralIcon,
  },
  {
    id: 'full-pave',
    label: 'Full Pavé',
    description: 'Ornate and detailed',
    icon: FullPaveIcon,
  },
  {
    id: 'toi-et-moi',
    label: 'Toi et Moi',
    description: 'Romantic and symbolic',
    icon: ToiEtMoiIcon,
  },
  {
    id: 'three-stone',
    label: 'Three Stone',
    description: 'Timeless triple brilliance',
    icon: ThreeStoneIcon,
  },
];
