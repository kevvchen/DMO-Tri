import DigimonCard from "@components/DigimonCard";

// localhost:3000/encylopedia

const page = () => {
  const ids = [];

  for (let i = 1; i < 500; i++) {
    ids.push(i);
  }

  return (
    <>
      <h1 className="font-extrabold p-5 text-4xl">ENCYCLOPEDIA</h1>
      {/* Outer Digimon Card Component */}
      <div className="border border-solid border-digimonCardContainer rounded-md w-full max-w-screen-lg relative mt-2">
        <div className="absolute inset-0 bg-encyclopedia opacity-50"></div>
        {/* Inner cards layout */}
        <div className="flex flex-wrap justify-evenly gap-1">
          {ids.map((id) => (
            <div key={id} className="opacity-100 w-1/6">
              <DigimonCard digimonId={id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
