export const fadeInUp = {
  hidden: {
    y: 20,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};