import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col flex-wrap mt-5 max-w-screen-lg min-h-full border-solid border-1 border-borderFooter w-3/6 md:w-full">
      {/* Discord link container */}
      <div className="relative">
        <a
          href="https://discord.gg/invite/baldnation"
          alt="discord-invite-link"
        >
          <div className="absolute inset-0 bg-footerDiscord bg-cover bg-center bg-no-repeat opacity-50"></div>
          <div className="relative z-10 flex px-3 py-3 items-start justify-evenly text-amber-300">
            {/* Discord icon/image section */}
            <div className="flex flex-col">
              {/* Discord logo */}
              <div>
                <Image
                  src="/assets/images/discord-logo-new.svg"
                  height={20}
                  width={150}
                />
              </div>
              <div>
                <h3 className="uppercase">Join The Community</h3>
              </div>
            </div>
            {/* Discord benefits */}
            <div className="flex flex-col pl-5 pt-12">
              <h3 className="uppercase font-bold text-2xl ">
                Community Offers
              </h3>
              <ul className="text-left list-disc pt-3">
                <li>Active dungeon party finding system</li>
                <li>
                  Discussion about the latest game updates with top players in
                  the game
                </li>
                <li>Market system where players can buy and sell items</li>
                <li>General hangout area for all tamers!</li>
              </ul>
            </div>
          </div>
        </a>
      </div>
      {/* Social media icons */}
      {/* Outer container */}
      <div className="flex gap-3 justify-center items-center mt-4">
        {/* Inner flex items (Twitch, youtube) */}
        <div className="bg-socialMediaBg hover:bg-purple-400 px-0.5 py-0.5">
          <a href="https://www.twitch.tv/nurturerapple">
            <Image
              src="/assets/icons/twitch-logo.svg"
              height={40}
              width={40}
              className="filter invert"
            />
          </a>
        </div>
        <div className="bg-socialMediaBg hover:bg-red-400 px-0.5 py-0.5">
          <a href="https://www.youtube.com/@JoshLamDMO">
            <Image
              src="/assets/icons/youtube-logo.svg"
              width={40}
              height={40}
              className="filter invert"
            />
          </a>
        </div>
      </div>
      <span className="text-center mt-2 text-sm brightness-75">
        © 2023 Digimon Masters Online Tri
      </span>
    </footer>
  );
};

export default Footer;
