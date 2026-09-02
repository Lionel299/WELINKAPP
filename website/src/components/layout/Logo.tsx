import Link from 'next/link';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  white?: boolean;
}

export default function Logo({ size = 'md', white = false }: LogoProps) {
  const sizes = {
    sm: 'h-6 text-xl',
    md: 'h-8 text-2xl',
    lg: 'h-10 text-3xl',
  };

  const svgSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  return (
    <Link href="/" className="flex items-center gap-2 group">
      <svg
        className={`${svgSizes[size]} flex-shrink-0 transition-transform group-hover:scale-105`}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill={white ? '#FFFFFF' : '#2563EB'} />
        <path
          d="M10 28V12L16 22L22 12V28"
          stroke={white ? '#2563EB' : '#FFFFFF'}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 28V12"
          stroke={white ? '#2563EB' : '#FFFFFF'}
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className={`font-bold tracking-tight ${sizes[size]}`}>
        <span className={white ? 'text-white' : 'text-[#2563EB]'}>We</span>
        <span className={white ? 'text-white/90' : 'text-gray-900'}>Link</span>
      </span>
    </Link>
  );
}
