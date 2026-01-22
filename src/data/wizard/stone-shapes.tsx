import Image from 'next/image';
import type { StoneShapeOption } from '@/types/wizard';

export const stoneShapes: StoneShapeOption[] = [
  {
    id: 'round',
    label: 'Round',
    description: 'The most brilliant cut',
    icon: <Image src="/diamond-design/d_shape_round.svg" alt="Round" width={48} height={48} />,
  },
  {
    id: 'oval',
    label: 'Oval',
    description: 'Elongates the finger',
    icon: <Image src="/diamond-design/d_shape_oval.svg" alt="Oval" width={48} height={48} />,
  },
  {
    id: 'cushion',
    label: 'Cushion',
    description: 'Classic with soft corners',
    icon: <Image src="/diamond-design/d_shape_cushion.svg" alt="Cushion" width={48} height={48} />,
  },
  {
    id: 'emerald',
    label: 'Emerald',
    description: 'Step-cut for clarity',
    icon: <Image src="/diamond-design/d_shape_emerald.svg" alt="Emerald" width={48} height={48} />,
  },
  {
    id: 'princess',
    label: 'Princess',
    description: 'Square with sharp corners',
    icon: <Image src="/diamond-design/d_shape_princess.svg" alt="Princess" width={48} height={48} />,
  },
  {
    id: 'asscher',
    label: 'Asscher',
    description: 'Step-cut with square shape',
    icon: <Image src="/diamond-design/d_shape_asscher.svg" alt="Asscher" width={48} height={48} />,
  },
  {
    id: 'marquise',
    label: 'Marquise',
    description: 'Elongated with pointed ends',
    icon: <Image src="/diamond-design/d_shape_marquise.svg" alt="Marquise" width={48} height={48} />,
  },
  {
    id: 'pear',
    label: 'Pear',
    description: 'Combines round and marquise',
    icon: <Image src="/diamond-design/d_shape_pear.svg" alt="Pear" width={48} height={48} />,
  },
  {
    id: 'radiant',
    label: 'Radiant',
    description: 'Square with brilliant cut',
    icon: <Image src="/diamond-design/d_shape_radiant.svg" alt="Radiant" width={48} height={48} />,
  },
];
