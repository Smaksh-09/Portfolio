"use client";

export default function Resume() {
  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1U6lfIlmIvi_yVMiNxchRgEQ91-Sg9b4O/view?usp=drive_link", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative px-4 sm:px-6 md:absolute md:top-[350px] md:left-24">
      <button
        onClick={handleResumeClick}
        className="relative px-6 py-3 rounded-full font-medium text-white 
          bg-gradient-to-r from-purple-400 to-pink-400
          hover:from-purple-500 hover:to-pink-500
          transform transition-all duration-200 hover:scale-105
          shadow-lg hover:shadow-purple-500/25 z-20
          w-full md:w-auto mt-8 md:mt-0"
      >
        Get my resume
      </button>
    </div>
  );
}
