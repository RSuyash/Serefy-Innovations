import React from 'react';
import { motion } from 'motion/react';

interface AnimatedTagsProps {
  tags: string[];
}

export default function AnimatedTags({ tags }: AnimatedTagsProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % tags.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [tags.length]);

  return (
    <div className="flex items-center gap-2 bg-primary/10 pl-3 md:pl-4 pr-4 md:pr-6 py-1.5 md:py-2 rounded-full overflow-hidden max-w-full">
      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse shrink-0"></div>
      <motion.div
        key={index}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="text-primary text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap"
      >
        {tags[index]}
      </motion.div>
    </div>
  );
}
