import { useState } from "react";
import { ChevronRight, Menu, X } from "lucide-react";

export default function Header({ data, setPlanet, planet }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const planetColors = {
        Mercury: "bg-mercury",
        Venus: "bg-venus",
        Earth: "bg-earth",
        Mars: "bg-mars",
        Jupiter: "bg-jupiter",
        Saturn: "bg-saturn",
        Uranus: "bg-uranus",
        Neptune: "bg-neptune",
    };

    return(
        <header className='relative flex items-center justify-between p-6 border-white/20 w-dvw'>
            {/* title */}
            <h1 className='font-antonio text-2xl font-medium tracking-widest'>
                THE PLANETS
            </h1>
            
            {/* mobile menu button */}
            <button
                className="lg:hidden z-50" 
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation">
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
                
            {/* nav */}
            <ul className={`fixed inset-0 flex flex-col items-start justify-start gap-4 p-8 pt-24 uppercase font-semibold tracking-widest transition-transform duration-300 ease-in-out overflow-y-auto 
            lg:static lg:flex lg:flex-row lg:gap-8 lg:bg-transparent lg:p-0 lg:translate-x-0 
            ${ menuOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
            }`}
      >
                {data.map((p) => (
                    <li key={p.name}
                        onClick={() => {
                            setPlanet(p.name);
                            setMenuOpen(false);
                        }}
                        className='font-semibold cursor-pointer flex items-center gap-4'
                    >
                        <div className={`h-10 w-10 rounded-lg bg-${p.name}`} ></div>
                        <span className="uppercase tracking-widest">{p.name}</span>

                        <ChevronRight size={16} opacity={.4} className="sm:hidden"/>
                    </li>
                ))}
            </ul>
        </header>
    );
}