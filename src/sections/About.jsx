import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-barber-surface">
            <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative rounded-lg overflow-hidden shadow-2xl group">
                    <img
                        src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop"
                        alt="Barber working"
                        className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
                </div>
                <div className="text-center lg:text-left">
                    <h2 className="text-4xl md:text-5xl mb-5">More Than Just A Haircut</h2>
                    <div className="w-20 h-0.5 bg-barber-gold mb-8 mx-auto lg:mx-0"></div>
                    <p className="text-barber-muted text-lg mb-6 leading-relaxed">
                        Established in 2023, Afiq Barber was born out of a passion for the craft of men's grooming.
                        We believe that a haircut is not just a routine, but an experience that boosts confidence and defines style.
                    </p>
                    <p className="text-barber-muted text-lg mb-8 leading-relaxed">
                        Our shop combines the nostalgia of the classic barbershop with modern techniques and aesthetics.
                        Whether you're looking for a classic fade, a sharp beard trim, or a complete transformation,
                        our skilled barbers are here to deliver perfection.
                    </p>
                    <a href="#contact" className="btn btn-outline">Visit Us</a>
                </div>
            </div>
        </section>
    );
};

export default About;
