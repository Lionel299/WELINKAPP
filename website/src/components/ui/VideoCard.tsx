import { Play } from 'lucide-react';

interface VideoCardProps {
  title: string;
  category: string;
  color: string;
}

export default function VideoCard({ title, category, color }: VideoCardProps) {
  return (
    <div className="group relative flex-shrink-0 w-48 md:w-56 overflow-hidden rounded-2xl cursor-pointer">
      {/* Video thumbnail placeholder */}
      <div className={`aspect-[9/16] bg-gradient-to-br ${color} relative`}>
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="text-xs font-medium text-white/80">{category}</span>
          <p className="text-sm font-semibold text-white mt-1">{title}</p>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white text-xs font-bold">4K</span>
          </div>
        </div>
      </div>
    </div>
  );
}
