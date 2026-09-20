
import banner from '../assets/banner-stack.png'

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-7xl conyainer mx-auto  ">
      
     
      <div className="flex flex-col gap-6 md:w-1/2">
        
  
        <div className="flex flex-col gap-1">
          <h1 className="text-5xl md:text-[64px] font-extrabold text-[#111827] tracking-tight leading-tight">
            Build Your Ideal
          </h1>
          <h1 className="text-5xl md:text-[64px] font-extrabold tracking-tight leading-tight">
        
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f86d36] via-[#e8367f] to-[#8431e7]">
              Development Stack
            </span>
          </h1>
        </div>

       
        <p className="text-lg text-slate-500 leading-relaxed max-w-[34rem]">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        
        <div className="flex flex-wrap items-center gap-4 mt-2">
          <button className="px-6 py-3 text-[15px] font-medium text-white bg-gradient-to-r from-[#f86d36] to-[#e8367f] rounded-lg shadow-sm hover:opacity-90 transition-opacity">
            Explore Technologies
          </button>
          <button className="px-6 py-3 text-[15px] font-medium text-slate-600 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
            Learn More
          </button>
        </div>
        
      </div>

  
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img 
          src={banner} 
          alt="3D isometric development stack illustration" 
          className="w-full max-w-[500px] object-contain" 
        />
      </div>
      
    </div>
  );
};

export default Banner;