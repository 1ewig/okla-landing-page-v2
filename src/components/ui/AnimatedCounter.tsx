import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

export function AnimatedCounter({ target, suffix = '' }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 1.5,
        ease: [0.25, 0.1, 0.25, 1],
      });
      return () => controls.stop();
    }
  }, [isInView, target, count]);

  useEffect(() => {
    const unsub = rounded.on('change', (v) => setDisplay(String(v)));
    return () => unsub();
  }, [rounded]);

  return (
    <motion.span
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="font-display font-extrabold text-[40px] text-lime leading-none"
    >
      {display}{suffix}
    </motion.span>
  );
}
