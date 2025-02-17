module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#1a1a1a",
        darkPurple: "#6a0dad",
        spotify: "#1DB954",
        apple: "#FA57C1",
        amazon: "#FF9900",
        youtube: "#FF0000",
        soundcloud: "#FF7700",
      },
      backgroundImage: {
        "gradient-blur":
          "linear-gradient(135deg, rgba(106,13,173,0.7), rgba(26,26,26,0.7))",
      },
      boxShadow: {
        glow: "0 0 15px rgba(255, 255, 255, 0.3)",
      },
      blur: {
        xl: "20px",
      },
    },
  },
  plugins: [],
};
