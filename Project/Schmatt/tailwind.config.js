/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cool-grey": "#707070",
        "rich-black": "#0F151A",
        "delif-blue": "#1C3373",
        iris: "#3F4ADE",
        "state-blue": "#6564DB",
        "text-color": "#BFBDBD",
        "border-color": "#333232",
        "button-active": "#212023",
        common: "#171717",
        "message-recieved": "#212023",
        "message-sent": "#3A393B",
        "schmatt-text": "#BFBDBD",
        "forum-background": "#191818",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textShadow: {
        messages: " text-shadow: 0 0 3px #FF0000",
      },
    },
  },
  plugins: [],
};
