import Link from 'next/link';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function NotFound() {
  return (
    <div className="pt-32 pb-20 min-h-[70vh] flex items-center justify-center bg-background">
      <Container className="text-center">
        <span className="text-primary font-bold text-sm uppercase tracking-wider bg-primary-50 px-4 py-1.5 rounded-full">
          404 Error
        </span>
        <h1 className="text-display font-extrabold text-slate-900 mt-4 mb-2">Page Not Found</h1>
        <p className="text-slate-600 text-body max-w-md mx-auto mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button variant="primary" size="lg" href="/">
          Back to Homepage
        </Button>
      </Container>
    </div>
  );
}
