const page = () => {
  return (
    <>
      <div className="w-full max-w-screen-lg">
        <h1 className="font-extrabold p-5 text-4xl text-center">Seal Master</h1>
        <div className="flex flex-col gap-2 items-center">
          <p>Applied Stats</p>
          <img src="/assets/images/seal_stat.png" alt="Seal applied stats" />
          <p>Options</p>
          <p>0 - 1 - 50 - 200 - 500 - 1000 - 3000</p>
          <img src="/assets/images/stat_options.png" alt="Stat options" />
          <p>Seal pets only available when 3000 seals are opened.</p>
          <img src="/assets/images/orochi_pet.png" alt="Orochimon seal pet" />
        </div>
      </div>
    </>
  );
};

export default page;
