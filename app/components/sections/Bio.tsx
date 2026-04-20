const Bio = () => {
  return (
    <div className="flex flex-col w-full sm:flex-row items-center justify-between gap-4">
      <div className="text-black">
        <h1 className="font-bold text-2xl">Shreya Jamnadas</h1>
        <h2 className="text-lg">
          Computer Science dedicated to creating user-focused products
        </h2>
      </div>
      <div>
        <button className="bg-black text-white outline-black outline-solid rounded-full hover:bg-gray-800 p-[0.35rem]">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Bio;
