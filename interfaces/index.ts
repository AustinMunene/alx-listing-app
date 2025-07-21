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