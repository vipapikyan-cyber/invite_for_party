import localFont from "next/font/local";

const heghnar = localFont({
  src: [
    {
      path: "./artarumianheghnar.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-heghnar",
});

const tangerine = localFont({
  src: [
    {
      path: "./tangerine/Tangerine-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./tangerine/Tangerine-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-tangerine",
});

const montserrat = localFont({
  src: [
    {
      path: "./montserrat/light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./montserrat/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./montserrat/medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./montserrat/bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./montserrat/extraBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-montserrat",
});

const classNames = [
  heghnar.variable,
  montserrat.variable,
  tangerine.variable,
].join(" ");

export { classNames, heghnar };
