"use client";
import { useState, useEffect } from "react";

const DigimonCard = ({ digimonId }) => {
  const [digimon, setDigimon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function getDigimon() {
      try {
        const res = await fetch(
          `https://www.digi-api.com/api/v1/digimon/${digimonId}`
        );
        const data = await res.json();
        setDigimon(data);
      } catch (error) {
        console.error(error);
        setDigimon(null);
      }
    }
    getDigimon();
  }, [digimonId]);

  const handleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <div>
      {digimon ? (
        <>
          {/* Outer Card container/layout */}
          <div
            className="m-2 rounded-lg shadow-sm border border-solid border-digimonCardContainer cursor-pointer"
            onClick={handleModal}
          >
            {/* Inner card design */}
            <div className="flex flex-col justify-center items-center w-full p-12 bg-friendshipVice bg-contain bg-center relative h-40">
              {/* The rounded image logo */}
              <div className="rounded-full overflow-hidden shadow-md">
                <img
                  src={digimon.images[0].href}
                  alt="Digimon portrait"
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Name of digimon with the same format as the main page card layout */}
              <div className="digimon-card-layout-text-bg w-full absolute left-0 bottom-0">
                <p className="overflow-hidden">{digimon.name}</p>
              </div>
            </div>
          </div>
          {/* Modal window goes here */}
          {isModalOpen && (
            <>
              {/* Modal window */}
              <div
                className="overlay flex justify-center items-center"
                onClick={handleModal}
              >
                {/* Layout of the modal window of the digimon */}
                <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center h-screen">
                  {/* The card outer container */}
                  <div className="w-1/2 rounded-lg shadow-md border border-solid border-digimonCardContainer">
                    {/* Layout of card content */}
                    <div className="flex gap-2 bg-encyclopedia bg-center bg-contain">
                      {/* Image on left side */}
                      <div className="p-10 flex-shrink-0 flex justify-center items-center">
                        <div className="w-full h-80">
                          <img
                            src={digimon.images[0].href}
                            alt={digimon.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      {/* Name, etc on right side (top-down)*/}
                      <div className="flex flex-col p-10 ml-6 flex-wrap">
                        <h1>{digimon.name}</h1>
                        <p>{digimon.levels[0]?.level}</p>
                        <p>{digimon.attributes[0]?.attribute}</p>
                        <p>{digimon.types[0]?.type}</p>
                        <div className="overflow-auto h-40">
                          <p>{digimon.descriptions[1]?.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
};

export default DigimonCard;
