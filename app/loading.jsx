// Loading.js
import image from "./assets/fabrika.jpg"
const Loading = () => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
    >
      {/* Background overlay for color */}
      <div className="absolute inset-0 bg-slate-900 opacity-80">

      </div>

      {/* Loading spinner */}
      <div className="relative w-16 h-16 border-4 border-white border-t-transparent border-solid rounded-full animate-spin">
        <span className="text-lg text-gray-700 dark:text-gray-300">BALABAN</span>
      </div>

    </div>
  );
};

export default Loading;
