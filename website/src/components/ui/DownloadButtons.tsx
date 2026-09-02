interface DownloadButtonsProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  layout?: 'horizontal' | 'vertical';
}

export default function DownloadButtons({ 
  size = 'lg', 
  className = '',
  layout = 'horizontal'
}: DownloadButtonsProps) {
  const containerClass = layout === 'vertical' 
    ? 'flex flex-col space-y-3' 
    : 'flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4';

  const sizeClasses = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-11 px-4 text-sm',
    lg: 'h-14 px-6 text-base'
  };

  return (
    <div className={`${containerClass} ${className}`}>
      {/* Google Play Store */}
      <button
        onClick={() => window.open('https://play.google.com/store', '_blank')}
        className={`${sizeClasses[size]} flex items-center justify-center gap-2.5 bg-black text-white rounded-lg hover:opacity-90 transition-all w-full sm:w-auto font-medium`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path fill="#00A4EF" d="M2.5 2c-.3.2-.5.7-.5 1.3v17.4c0 .6.2 1.1.5 1.3l10.8-10.8L2.5 2z"/>
          <path fill="#3DDC84" d="M14.5 14.5l-3.7-3.7 3.7-3.7 10.3 5.1c.3.2.4.5.4.9 0 .4-.1.7-.4.9l-10.3 5.1z"/>
          <path fill="#FFBA00" d="M14.5 9.8l-3.7-3.7c-.3-.3-.8-.5-1.3-.5H2.5c-.1 0-.3.1-.4.2l10.9 10.8 3.7-3.7-3.4-3.1z"/>
          <path fill="#EA4335" d="M14.5 14.5l3.7-3.7v7.4c0 .5-.2 1-.5 1.3l-10.8-10.8 3.6 3.6z"/>
        </svg>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-xs opacity-70">GET IT ON</span>
          <span className="font-bold">Google Play</span>
        </div>
      </button>

      {/* Apple App Store */}
      <button
        onClick={() => window.open('https://apps.apple.com', '_blank')}
        className={`${sizeClasses[size]} flex items-center justify-center gap-2.5 bg-black text-white rounded-lg hover:opacity-90 transition-all w-full sm:w-auto font-medium`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M17.05 13.5c-.06-1.94 1.53-2.86 1.6-2.92-1.08-1.6-2.78-1.82-3.4-1.84-1.44-.15-2.82.85-3.56.85-.75 0-1.86-.83-3.06-.81-1.57.03-3.03.92-3.84 2.32-1.63 2.84-.42 7.05 1.17 9.35.77 1.13 1.7 2.4 2.92 2.36 1.13-.04 1.56-.73 2.92-.73 1.36 0 1.77.73 2.93.7 1.2-.03 1.97-1.15 2.73-2.3.87-1.27 1.22-2.5 1.24-2.56-.04-.01-2.37-.91-2.43-3.62zM12.03 3.5c.63-.8 1.05-1.92.93-3.03-1.05.04-2.34.7-3.1 1.58-.58.68-1.1 1.78-.96 2.83 1.17.1 2.35-.58 3.13-1.38z"/>
        </svg>
        <div className="flex flex-col items-start leading-tight">
          <span className="text-xs opacity-70">Download on the</span>
          <span className="font-bold">App Store</span>
        </div>
      </button>
    </div>
  );
}
