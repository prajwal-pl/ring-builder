import type { MetalOption } from '@/types/configurator';

export const metalOptions: MetalOption[] = [
  {
    id: '14k-white',
    label: '14K White',
    hexColor: '#E8E8E8',
    priceModifier: 0,
  },
  {
    id: '18k-yellow',
    label: '18K Yellow',
    hexColor: '#FFD700',
    priceModifier: 200,
  },
  {
    id: '14k-rose',
    label: '14K Rose',
    hexColor: '#B76E79',
    priceModifier: 50,
  },
  {
    id: '18k-white',
    label: '18K White',
    hexColor: '#F5F5F5',
    priceModifier: 200,
  },
  {
    id: 'platinum',
    label: 'Platinum',
    hexColor: '#E5E4E2',
    priceModifier: 500,
  },
  {
    id: '18k-rose',
    label: '18K Rose',
    hexColor: '#C9A9A6',
    priceModifier: 250,
  },
  {
    id: '14k-yellow',
    label: '14K Yellow',
    hexColor: '#F4C430',
    priceModifier: 0,
  },
  {
    id: 'mixed',
    label: 'Mixed',
    hexColor: 'linear-gradient(135deg, #FFD700 0%, #E8E8E8 50%, #B76E79 100%)',
    priceModifier: 100,
  },
];
