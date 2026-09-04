import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  white?: boolean;
}

export default function Logo({ size = 'md', white = false }: LogoProps) {
  const sizes = {
    sm: { width: 48, height: 48 },
    md: { width: 56, height: 56 },
    lg: { width: 64, height: 64 },
  };

  return (
    <Link href="/" className="flex items-center group">
      <Image
        src="/logo-size.png"
        alt="WeLink Logo"
        width={sizes[size].width}
        height={sizes[size].height}
        className="flex-shrink-0 transition-transform group-hover:scale-105"
      />
    </Link>
  );
}
