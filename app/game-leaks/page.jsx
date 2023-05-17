const page = () => {
  return (
    <>
      <div className="w-full max-w-screen-lg">
        <h1 className="uppercase font-extrabold p-5 text-4xl text-center">
          Game Leaks
        </h1>
        {/* Leaked information container */}
        <div className="flex gap-2">
          <div className="flex flex-col gap-1 w-1/2 items-center">
            <h3 className="font-extrabold text-xl">New leaked digimon</h3>
            <div className="border border-solid border-red-500 rounded-md">
              <img
                src="/assets/images/leak_1.png"
                alt="Gabumon Kizuna leaks"
                className="p-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1 w-1/2 items-center">
            <h3 className="font-extrabold text-xl">Youtube Video</h3>
            <div className="border border-solid border-red-500 rounded-md">
              <a href="https://www.youtube.com/watch?v=RVbGkXjPsvU&t=70s&ab_channel=JoshLamNADMO">
                Watch the video
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <h3 className="font-extrabold text-xl">New Map?</h3>
            <div className="border border-solid border-red-500 rounded-md">
              <img
                src="/assets/images/leak_2.png"
                alt="D-reaper map leak"
                className="p-2 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
