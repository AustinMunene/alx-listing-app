export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface CardProps {
  title: string;
  description: string;
  image: string;
  children?: React.ReactNode;
}

export interface PropertyProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  location?: string;
  rating?: number;
  // Add more fields as needed for your property listings
} 