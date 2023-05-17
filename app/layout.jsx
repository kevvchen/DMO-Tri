import "@styles/globals.css";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

export const metadata = {
  title: "Digimon Masters Online Tri! ",
  description:
    "Bringing you the latest guides and updates about Digimon Masters Online",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col items-center w-full min-h-screen bg-deepBlue text-textWhite font-alegreya tracking-wide">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
