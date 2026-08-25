// Shared image catalog and constants

import  k1 from '../assets/kitchen/33.jpeg'
import b1 from '../assets/bathroom/1.jpeg'
import p1 from '../assets/patio/5.jpg'
import nc1 from '../assets/new-construction/1.jpg'
import ra1 from '../assets/room-addition/1 (1).jpeg'
import fh1 from '../assets/full house/10910-wickersham/1.jpeg'


export const IMG = {
  hero: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&h=900&fit=crop&auto=format',
  hero2: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1800&h=900&fit=crop&auto=format',
  hero3: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1800&h=900&fit=crop&auto=format',
  kitchen1: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=700&fit=crop&auto=format',
  kitchen2: 'https://images.unsplash.com/photo-1556909195-4d5dfcb42a36?w=900&h=700&fit=crop&auto=format',
  kitchen3: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&h=700&fit=crop&auto=format',
  bathroom1: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop&auto=format',
  bathroom2: 'https://images.unsplash.com/photo-1620626011761-996317702519?w=900&h=700&fit=crop&auto=format',
  bathroom3: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=900&h=700&fit=crop&auto=format',
  living1: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd3?w=900&h=700&fit=crop&auto=format',
  living2: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&h=700&fit=crop&auto=format',
  living3: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=900&h=700&fit=crop&auto=format',
  exterior1: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&h=700&fit=crop&auto=format',
  exterior2: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=900&h=700&fit=crop&auto=format',
  exterior3: 'https://images.unsplash.com/photo-1523217582562-09d05c370e6a?w=900&h=700&fit=crop&auto=format',
  cabinets1: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=900&h=700&fit=crop&auto=format',
  cabinets2: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&h=900&fit=crop&auto=format',
  cabinets3: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=900&h=700&fit=crop&auto=format',
  cabinets4: 'https://images.unsplash.com/photo-1556909195-4d5dfcb42a36?w=900&h=700&fit=crop&auto=format',
  flooring: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=900&h=700&fit=crop&auto=format',
  addition: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=900&h=700&fit=crop&auto=format',
  team: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&h=600&fit=crop&auto=format',
  about: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1600&h=700&fit=crop&auto=format',
  finance: 'https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&h=700&fit=crop&auto=format',
  portfolio_hero: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=700&fit=crop&auto=format',
}

// Sorts photos loaded via import.meta.glob numerically by filename (1.jpg, 2.jpeg, 10.jpeg, ...)
export function sortImagesByFilename(modules: Record<string, string>): string[] {
  return Object.entries(modules)
    .sort(([a], [b]) => {
      const numA = parseInt(a.match(/(\d+)\.\w+$/)?.[1] ?? '0', 10)
      const numB = parseInt(b.match(/(\d+)\.\w+$/)?.[1] ?? '0', 10)
      return numA - numB
    })
    .map(([, url]) => url)
}

type DropdownLink = { label: string; path: string; img?: string; external?: boolean; dropdown?: DropdownLink[] }

export const SERVICE_LINKS: DropdownLink[] = [
  { label: 'Kitchen Remodel', path: '/services/kitchen', img: k1 },
  { label: 'Bathroom Remodel', path: '/services/bathroom', img: b1 },
  { label: 'Room Addition', path: '/services/addition', img: ra1 },
  { label: 'Patio & Outdoors', path: '/services/patio', img: p1 },
  { label: 'Full House Renovation', path: '/services/full-house-renovation', img: fh1 },
  { label: 'New Construction', path: '/services/new-construction', img: nc1 },
  
]

export const COUNTERTOP_LINKS: DropdownLink[] = [
  { label: 'Granite', path: '/countertops/granite' },
  { label: 'Marble', path: '/countertops/marble' },
  { label: 'Quartz', path: '/countertops/quartz' },
  { label: 'Quartzite', path: '/countertops/quartzite' },
]

export const FLOORING_LINKS: DropdownLink[] = [
  { label: 'Backsplash', path: '/flooring/backsplash' },
  { label: 'Carpet', path: '/flooring/carpet' },
  { label: 'Engineered Hardwood', path: '/flooring/engineered-hardwood' },
  { label: 'Laminate', path: '/flooring/laminate' },
  { label: 'Luxury Vinyl', path: '/flooring/luxury-vinyl' },
  { label: 'Tile', path: '/flooring/tile' },
]

export const DOOR_LINKS: DropdownLink[] = [
  { label: 'Iron Door', path: '/doors/iron-door' },
  { label: 'Shaker Interior', path: '/doors/shaker-interior' },
]

export const VENDOR_LINKS: DropdownLink[] = [
  { label: 'Counter Tops', path: '/countertops', dropdown: COUNTERTOP_LINKS },
  { label: 'Flooring', path: '/services/flooring', dropdown: FLOORING_LINKS },
  { label: 'Doors', path: '/doors', dropdown: DOOR_LINKS },
  { label: 'Accessories', path: '/vendors' },
]

export const NAV_ITEMS = [
  {
    label: 'Design + Build',
    path: '/services',
    dropdown: SERVICE_LINKS,
  },
  { label: 'Roofing', path: '/services/roofing' },
  { label: 'Windows', path: '/windows' },
  { label: 'Cabinets', path: 'https://renovvocabinets.com/', external: true },
  {
    label: 'Partner Vendors',
    path: '/vendors',
    dropdown: VENDOR_LINKS,
  },
  { label: 'Financing', path: '/finances' },
  { label: 'Gallery', path: '/portfolio' },


 
  
  {
    label: 'Support',
    path: '/support',
    dropdown: [
      { label: 'Get Support', path: '/support/get-support' },
      { label: 'About Us', path: '/support/about-us' },
      { label: 'Our Process', path: '/support/our-process' },
      { label: 'Our Value', path: '/support/our-value' },
    ],
  },

 

]
