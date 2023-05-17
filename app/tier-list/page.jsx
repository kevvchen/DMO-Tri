import DigimonCard from "@components/DigimonCard";

const page = () => {
  return (
    <>
      <div className="w-full max-w-screen-lg">
        <h1 className="font-extrabold p-5 text-4xl text-center">TIER LIST</h1>
        <h3 className="text-center">
          DISCLAIMER: EACH TIER LIST CATEGORY IS IN NO PARTICULAR ORDER
        </h3>
        {/* Tiers */}
        <div className="flex flex-col gap-2">
          <h2 className="uppercase font-semibold text-2xl">Tier SSS</h2>
          {/* Tier SSS */}
          <div>
            <DigimonCard digimonId={1145} />
            <DigimonCard digimonId={1273} />
            <DigimonCard digimonId={783} />
          </div>
          <hr className="hr" />
          {/* Tier SS */}
          <div>
            <h2 className="uppercase font-semibold text-2xl">Tier SS</h2>
            <div>
              <DigimonCard digimonId={1309} />
              <DigimonCard digimonId={987} />
              <DigimonCard digimonId={186} />
            </div>
            <hr className="hr" />
          </div>
          {/* Tier S+ */}
          <div>
            <h2 className="uppercase font-semibold text-2xl">Tier S+</h2>
            <div>
              <DigimonCard digimonId={100} />
              <DigimonCard digimonId={505} />
            </div>
            <hr className="hr" />
          </div>
          {/* Tier S */}
          <div>
            <h2 className="uppercase font-semibold text-2xl">Tier S</h2>
            <div>
              <DigimonCard digimonId={299} />
              <DigimonCard digimonId={998} />
              <DigimonCard digimonId={443} />
              <DigimonCard digimonId={570} />
              <DigimonCard digimonId={1020} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
