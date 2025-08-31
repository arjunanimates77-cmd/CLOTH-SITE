import { Product } from '@/contexts/CartContext';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'DIVINE HOODIE',
    price: 892345,
    image: '/src/components/assets/cloth1.png',
    category: 'Graphics',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Neon Green'],
    description: 'Premium cotton streetwear tee with exclusive neon pulse graphic design. Made for the urban warriors who dare to stand out.',
    featured: true
  },
  {
    id: '2',
    name: 'ELEGANT',
    price: 9532,
    image: '/src/components/assets/cloth2.png',
    category: 'Graphics',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Dark Grey', 'Electric Blue'],
    description: 'Futuristic design meets street culture. High-quality fabric with cyberpunk-inspired graphics.',
    featured: true
  },
  {
    id: '3',
    name: 'MINIMAL LOGO TEE',
    price: 792345,
    image: '/api/placeholder/400/500',
    category: 'Basics',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey'],
    description: 'Clean and simple design featuring our iconic logo. Perfect for everyday streetwear.',
    featured: false
  },
  {
    id: '4',
    name: 'URBAN REBELLION TEE',
    price: 9934,
    image: '/api/placeholder/400/500',
    category: 'Limited',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Blood Orange'],
    description: 'Limited edition design celebrating urban culture and rebellion. Premium heavyweight cotton.',
    featured: true
  },
  {
    id: '5',
    name: 'GLOW STREET TEE',
    price: 8523454,
    image: '/src/components/assets/cloth3.png',
    category: 'Graphics',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Neon Pink'],
    description: 'Glow-in-the-dark elements combined with street art graphics. Stand out in any crowd.',
    featured: false
  },
  {
    id: '6',
    name: 'CONCRETE JUNGLE TEE',
    price: 9223454,
    image: '/api/placeholder/400/500',
    category: 'Graphics',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Stone Grey', 'Olive'],
    description: 'Urban landscape meets nature in this exclusive design. Made with sustainable materials.',
    featured: true
  }
];

export const categories = ['All', 'Graphics', 'Basics', 'Limited'];
export const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
export const colors = ['Black', 'White', 'Grey', 'Neon Green', 'Electric Blue', 'Neon Pink', 'Blood Orange'];