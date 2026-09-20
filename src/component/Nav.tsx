
import logo from '../assets/logo-text.png'

const Nav = () => {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between h-20 bg-white border-b border-gray-100 container mx-auto">
          
          <img src={logo} alt="DevStack Logo" className="h-8 md:h-10 w-auto" />
          
           <ul className="hidden md:flex items-center gap-8">
            <li className="text-[15px] font-medium text-[#DB2777] cursor-pointer">Home</li>
            <li className="text-[15px] font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">Technologies</li>
            <li className="text-[15px] font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">Projects</li>
            <li className="text-[15px] font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">About</li>
            <li className="text-[15px] font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">Contact</li>
           </ul>

           <div className="flex items-center gap-4 md:gap-6">
            <button className="text-[15px] font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Sign in
            </button>
            <button className="px-6 py-2.5 text-[15px] font-medium text-white bg-[#D91B7E] rounded-full hover:bg-pink-700 transition-colors shadow-sm">
                Sign Up
            </button>
           </div>
            
        </nav>
    );
};

export default Nav;