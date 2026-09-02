'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="pt-32 pb-20 min-h-[70vh] flex items-center justify-center bg-background">
      <Container className="text-center">
        <h2 className="text-heading-2 font-bold text-slate-900 mb-4">Something went wrong</h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          An unexpected error occurred while rendering this page.
        </p>
        <Button variant="primary" size="md" onClick={() => reset()}>
          Try again
        </Button>
      </Container>
    </div>
  );
}
