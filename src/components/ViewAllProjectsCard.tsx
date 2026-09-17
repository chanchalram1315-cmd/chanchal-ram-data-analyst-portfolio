import { motion, type MotionValue, useTransform } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

interface ViewAllProjectsCardProps {
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export default function ViewAllProjectsCard({
  index,
  totalCards,
  progress,
}: ViewAllProjectsCardProps) {
  const rangeStart = index / totalCards;
  const scale = useTransform(progress, [rangeStart, 1], [1, 1]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.a
        href="/projects.html"
        style={{ scale, top: `${index * 28}px`, backgroundColor: '#0C0C0C' }}
        className="absolute flex h-[calc(85vh-2rem)] w-full max-w-[1760px] flex-col items-center justify-center gap-6 overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-8 text-center origin-top transition-colors duration-300 hover:bg-[#151515] sm:h-[calc(85vh-3rem)] sm:rounded-[50px] md:rounded-[60px]"
      >
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(182,0,168,0.26),transparent_30%),radial-gradient(circle_at_82%_76%,rgba(190,76,0,0.18),transparent_32%)]" />
        <span className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(215,226,234,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(215,226,234,0.10)_1px,transparent_1px)] [background-size:48px_48px]" />
        <BarChart3 className="absolute -right-8 -bottom-10 h-64 w-64 text-[#D7E2EA]/10 sm:h-96 sm:w-96" strokeWidth={0.7} />
        <div className="relative flex flex-col items-center gap-6">
          <span className="text-[#D7E2EA]/60 text-xs font-medium uppercase tracking-[0.35em] sm:text-sm">
            Explore more work
          </span>
          <span
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}
          >
            View All Projects
          </span>
          <span className="rounded-full border border-[#D7E2EA]/60 px-6 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] sm:text-base">
            Open projects page
          </span>
        </div>
      </motion.a>
    </div>
  );
}
