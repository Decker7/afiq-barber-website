import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-barber-black/95 py-4 shadow-lg backdrop-blur-md' : 'bg-transparent py-5'}`}>
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <a href="#" className="font-heading text-2xl font-bold text-white uppercase tracking-[2px]">Afiq Barber</a>
                </div>

                {/* Mobile Toggle */}
                <div className="flex flex-col gap-1.5 cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>

                {/* Navigation */}
                <nav className={`absolute top-full left-0 w-full bg-barber-black border-b border-barber-surface p-5 flex flex-col gap-5 transition-transform duration-300 md:static md:w-auto md:bg-transparent md:border-none md:p-0 md:flex-row md:items-center md:gap-8 md:translate-y-0 ${menuOpen ? 'translate-y-0' : '-translate-y-[150%] md:translate-y-0'}`}>
                    <ul className="flex flex-col items-center gap-5 md:flex-row md:gap-8">
                        {['Home', 'Services', 'About', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="font-heading text-base text-barber-gray uppercase tracking-wider relative hover:text-barber-gold transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-barber-gold after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary w-full text-center md:w-auto" onClick={() => setMenuOpen(false)}>Book Now</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
