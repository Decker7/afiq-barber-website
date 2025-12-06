import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center bg-fixed flex items-center">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-barber-black/70 to-barber-black/90 z-10"></div>
            <div className="container relative z-20 text-center max-w-3xl mx-auto px-5">
                <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-5 opacity-0 animate-[fadeInUp_1s_ease_forwards] translate-y-8">
                    <span className="text-barber-gold">Premium Cuts</span> <br />
                    For The Modern Man
                </h1>
                <p className="text-lg md:text-xl text-barber-gray mb-10 opacity-0 animate-[fadeInUp_1s_ease_forwards_0.3s] translate-y-8">
                    Experience the art of grooming at Afiq Barber. <br />
                    Where style meets tradition.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-5 opacity-0 animate-[fadeInUp_1s_ease_forwards_0.6s] translate-y-8">
                    <a href="#contact" className="btn btn-primary">Book Appointment</a>
                    <a href="#services" className="btn btn-outline">Our Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
