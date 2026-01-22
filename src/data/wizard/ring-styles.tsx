import Image from 'next/image';
import type { RingStyleOption } from '@/types/wizard';

export const ringStyles: RingStyleOption[] = [
  {
    id: 'solitaire',
    label: 'Solitaire',
    description: 'Timeless and elegant',
    icon: <Image src="/ring-design/solitaire-yellow.png" alt="Solitaire" width={48} height={48} />,
  },
  {
    id: 'halo',
    label: 'Halo',
    description: 'Captivating and radiant',
    icon: <Image src="/ring-design/halo-yellow.png" alt="Halo" width={48} height={48} />,
  },
  {
    id: 'hidden-halo',
    label: 'Hidden Halo',
    description: 'Subtle yet brilliant',
    icon: <Image src="/ring-design/hiddenhalo-yellow.png" alt="Hidden Halo" width={48} height={48} />,
  },
  {
    id: 'bezel',
    label: 'Bezel',
    description: 'Sleek and contemporary',
    icon: <Image src="/ring-design/bezel-yellow.png" alt="Bezel" width={48} height={48} />,
  },
  {
    id: 'cathedral',
    label: 'Cathedral',
    description: 'Elevated and graceful',
    icon: <Image src="/ring-design/cathedral-yellow.png" alt="Cathedral" width={48} height={48} />,
  },
  {
    id: 'full-pave',
    label: 'Full Pavé',
    description: 'Ornate and detailed',
    icon: <Image src="/ring-design/fullpave-yellow.png" alt="Full Pavé" width={48} height={48} />,
  },
  {
    id: 'toi-et-moi',
    label: 'Toi et Moi',
    description: 'Romantic and symbolic',
    icon: <Image src="/ring-design/toietmoi-yellow.png" alt="Toi et Moi" width={48} height={48} />,
  },
  {
    id: 'three-stone',
    label: 'Three Stone',
    description: 'Timeless triple brilliance',
    icon: <Image src="/ring-design/threestone-yellow.png" alt="Three Stone" width={48} height={48} />,
  },
];
