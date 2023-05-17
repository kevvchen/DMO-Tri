import Link from "next/link";

const Home = () => {
  return (
    <>
      {/* Card navigation layout outer container */}
      <section className="all-sections">
        {/* Inner container */}
        <div className="flex flex-wrap gap-4 justify-center">
          {/* Card 1 - Outer design*/}
          <div className="card-nav-layout">
            {/* Card 1 - Inner card content */}
            <div className="card-inner-effect relative">
              <Link href="/tier-list">
                <img
                  src="/assets/images/Tierlist.png"
                  alt=""
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="card-layout-text-bg w-full absolute left-0 bottom-0">
                  <p className="card-title">Tier List</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Card 2 - Outer design*/}
          <div className="card-nav-layout">
            {/* Card 2 - Inner card content */}
            <div className="card-inner-effect relative">
              <Link href="/guides">
                <img
                  src="/assets/images/Agu-Gabu.png"
                  alt=""
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="card-layout-text-bg w-full absolute left-0 bottom-0">
                  <p className="card-title">Guides</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Card 3 - Outer design */}
          <div className="card-nav-layout">
            {/* Card 3 - Inner card content */}
            <div className="card-inner-effect relative">
              <Link href="/encyclopedia">
                <img
                  src="/assets/images/Encylopedia.png"
                  alt=""
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="card-layout-text-bg w-full absolute left-0 bottom-0">
                  <p className="card-title">Encyclopedia</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Card 4 - Outer design*/}
          <div className="card-nav-layout">
            {/* Card 4 - Inner card content */}
            <div className="card-inner-effect relative">
              <Link href="/seal-master">
                <img
                  src="/assets/images/seal_master.png"
                  alt=""
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="card-layout-text-bg w-full absolute left-0 bottom-0">
                  <p className="card-title">Seal Master</p>
                </div>
              </Link>
            </div>
          </div>
          {/* Card 5 - Outer design*/}
          <div className="card-nav-layout">
            {/* Card 5 - Inner card content*/}
            <div className="card-inner-effect relative">
              <Link href="/game-leaks">
                <img
                  src="/assets/images/LEAKS.png"
                  alt=""
                  className="w-full h-full object-cover rounded-sm"
                />
                <div className="card-layout-text-bg w-full absolute left-0 bottom-0">
                  <p className="card-title">Game Leaks</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
