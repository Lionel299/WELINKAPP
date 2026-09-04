'use client';

import { useMemo } from 'react';
import Container from '@/components/ui/Container';

export default function MapSection() {
  const mapTilerUrl = 'https://api.maptiler.com/maps/01a064e3-14c1-771f-bf23-e3961e799801/?key=DvJJUZaEy1icy86CXLTL';
  const defaultCoords = { lat: 5.6037, lon: -0.187 };

  const iframeSrc = useMemo(() => {
    return `${mapTilerUrl}#12/${defaultCoords.lat}/${defaultCoords.lon}`;
  }, [mapTilerUrl]);

  const mapFrameStyles = {
    filter: 'grayscale(0.1) contrast(1.05) saturate(0.9) brightness(0.95)',
  };

  return (
    <section id="map" className="section-padding bg-slate-900 text-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-heading-2 md:text-heading-1 lg:text-display font-bold text-white text-balance">
            Your next professional could be just around the corner.
          </h2>
          <p className="mt-4 text-body-lg text-slate-300 max-w-2xl mx-auto text-balance">
            WeLink helps customers discover verified local talent within seconds based on real-time distance, ratings, and immediate availability.
          </p>
        </div>

        <div className="bg-slate-800/90 border border-slate-700/80 rounded-3xl p-0 shadow-2xl backdrop-blur-xl overflow-hidden">
          <div className="relative h-[460px] md:h-[620px] rounded-2xl overflow-hidden bg-[#0f172a] border border-slate-700/50">
            <iframe
             title="MapTiler map"
             className="w-full h-full"
             src={iframeSrc}
             style={mapFrameStyles}
             allowFullScreen
             loading="lazy"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-slate-950/95 backdrop-blur-md z-30 border-t border-slate-800/90 shadow-[0_-18px_30px_rgba(2,6,23,0.8)]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
