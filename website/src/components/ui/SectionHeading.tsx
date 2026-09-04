interface SectionHeadingProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 ${className}`}>
      <h2 className="text-heading-2 md:text-heading-1 lg:text-display text-text-primary text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 md:mt-6 text-body-lg text-text-secondary max-w-3xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
