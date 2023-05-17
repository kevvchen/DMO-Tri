import Link from "next/link";

const MobileMenu = ({ dropDown }) => {
  return (
    <>
      {dropDown && (
        <div className="bg-darkBlue w-56 absolute top-14 right-2 flex-row flex-wrap border-2 border-gray-800">
          <div className="flex flex-col gap-3">
            <Link href="/" className="navbar-mobile-link-styling">
              <span>Home</span>
            </Link>
            <Link href="/tier-list" className="navbar-mobile-link-styling">
              <span>Tier List</span>
            </Link>
            <Link href="/guides" className="navbar-mobile-link-styling">
              <span>Guides</span>
            </Link>
            <Link href="/encyclopedia" className="navbar-mobile-link-styling">
              <span>Encyclopedia</span>
            </Link>
            <Link href="/seal-master" className="navbar-mobile-link-styling">
              <span>Seal Master</span>
            </Link>
            <Link href="/game-leaks" className="navbar-mobile-link-styling">
              <span>Game Leaks</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
