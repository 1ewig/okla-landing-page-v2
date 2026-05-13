export const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export const fadeUpStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const fadeLeft = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export const fadeRight = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export const scaleReveal = {
  hidden: { scale: 0.92, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export const slideInRight = {
  hidden: { x: 80, opacity: 0, rotate: 3 },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] as const, delay: 0.3 },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: '0 4px 24px rgba(0,0,0,0.08)' },
  hover: {
    y: -6,
    boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
    transition: { duration: 0.3 },
  },
};

export const viewportOnce = {
  once: true,
  margin: '-80px',
};
