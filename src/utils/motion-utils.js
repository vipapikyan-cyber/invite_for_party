export const textVariant = ({ delay, duration, once }) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: duration || 1.25,
        delay,
      },
    },
  },
});

export const fadeIn = ({ direction, type, delay, duration, once }) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  },
});

export const zoomIn = ({ type, delay, duration, once }) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      opacity: 0.2,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        // ease: "easeIn",
      },
    },
  },
});

export const opacity = ({ duration, once }) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once },
  transition: { duration },
  variants: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
});

export const flip = ({ type, delay, duration, once }) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      rotateX: 90,
    },
    show: {
      rotateX: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  },
});

export const slideIn = ({ direction, type, delay, duration, once }) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  },
});

export const blurIn = ({ duration, once }) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      filter: "blur(20px)",
      opacity: 0,
    },
    show: {
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        duration,
        ease: "easeOut",
      },
    },
  },
});

export const opacityScale = ({ once, type, delay, duration }) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      opacity: 0.5,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  },
});

export const fadeInTwo = ({
  directionX,
  directionY,
  type,
  delay,
  duration,
  once,
}) => ({
  initial: "hidden",
  whileInView: "show",
  viewport: { once },
  variants: {
    hidden: {
      x: directionX === "left" ? 100 : directionX === "right" ? -100 : 0,
      y: directionY === "up" ? 100 : directionY === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
        y: {
          duration: duration - 0.2,
        },
      },
    },
  },
});
