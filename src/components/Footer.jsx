import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-barber-surface">
            <div className="container flex flex-col items-center gap-8">
                <div className="footer-logo">
                    <a href="#" className="font-heading text-2xl text-white tracking-[2px]">Afiq Barber</a>
                </div>

                <div className="flex flex-col md:flex-row gap-8 text-center">
                    {['Home', 'Services', 'About', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-barber-muted text-sm uppercase tracking-wider hover:text-barber-gold transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                <div className="flex gap-5">
                    {['IG', 'FB', 'TW'].map((social) => (
                        <a
                            key={social}
                            href="#"
                            aria-label={social}
                            className="w-10 h-10 border border-barber-surface rounded-full flex justify-center items-center text-white text-xs font-bold transition-all duration-300 hover:bg-barber-gold hover:text-black hover:border-barber-gold"
                        >
                            {social}
                        </a>
                    ))}
                </div>

                <div className="mt-5 text-[#555] text-xs">
                    <p>&copy; {new Date().getFullYear()} Afiq Barber. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
