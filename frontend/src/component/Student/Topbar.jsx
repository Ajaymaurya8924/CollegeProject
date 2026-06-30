const Topbar = () => {
  return (
    <div className="w-full h-20 bg-white rounded-2xl shadow flex items-center justify-between px-8">

      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Student Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back 👋
        </p>
      </div>

      <div className="flex items-center gap-4">

        <div className="text-right">

          <h2 className="font-bold text-xl">
            Ajay Maurya
          </h2>

          <p className="text-gray-500">
            Student
          </p>

        </div>

        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex justify-center items-center text-2xl font-bold">
          A
        </div>

      </div>

    </div>
  );
};

export default Topbar;