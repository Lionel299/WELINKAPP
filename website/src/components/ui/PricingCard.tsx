import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted = false,
  cta,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 ${
        highlighted
          ? 'bg-primary text-white shadow-glow-lg border-2 border-primary scale-105'
          : 'bg-surface border border-gray-200 shadow-soft'
      } transition-all duration-300 hover:shadow-large`}
    >
      {highlighted && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-warning text-black text-xs font-bold rounded-full">
          Most Popular
        </span>
      )}
      <h3
        className={`text-heading-4 font-bold ${highlighted ? 'text-white' : 'text-text-primary'}`}
      >
        {name}
      </h3>
      <p
        className={`mt-2 text-body-sm ${highlighted ? 'text-white/80' : 'text-text-secondary'}`}
      >
        {description}
      </p>
      <div className="mt-6 mb-8">
        <span
          className={`text-display font-bold ${highlighted ? 'text-white' : 'text-text-primary'}`}
        >
          {price}
        </span>
        {period && (
          <span className={`text-body ${highlighted ? 'text-white/70' : 'text-text-secondary'}`}>
            {period}
          </span>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                highlighted ? 'text-white' : 'text-success'
              }`}
            />
            <span
              className={`text-body-sm ${highlighted ? 'text-white/90' : 'text-text-secondary'}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        variant={highlighted ? 'secondary' : 'outline'}
        size="lg"
        className={`w-full ${highlighted ? '!bg-white !text-primary hover:!bg-gray-100' : ''}`}
        href="#"
      >
        {cta}
      </Button>
    </div>
  );
}
