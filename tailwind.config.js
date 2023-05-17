/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Algreya Sans", "sans-serif"],
      },
      colors: {
        deepBlue: "#001b35",
        darkBlue: "#001427",
        mobileNavBlue: "#142c47",
        textWhite: "#dedede",
        borderFooter: "#fff2",
        socialMediaBg: "#fff3",
        cardLayoutBorder: "#1a3046",
        digimonCardContainer: "#1d3e67",
      },
      minHeight: {
        "nav-small": "3rem",
        "nav-medium": "3.25rem",
      },
      fontSize: {
        md: "100%",
        textMd: "170%",
        textSm: "140%",
      },
      backgroundImage: {
        // footerDiscord: "url(/assets/images/CA_Hotel.jpg)",
        footerDiscord: "url(/assets/images/baldnation.png)",
        friendshipVice: "url(/assets/images/friendship-vice2.jpg)",
        encyclopedia: "url(/assets/images/digital-data.jpg)",
      },
    },
  },
  plugins: [],
};
