import React from 'react';

const servicesData = [
    {
        id: 1,
        title: 'Classic Haircut',
        price: '$30',
        description: 'Precision cut, hot towel finish, and styling.'
    },
    {
        id: 2,
        title: 'Beard Trim',
        price: '$20',
        description: 'Shape up, trim, and beard oil application.'
    },
    {
        id: 3,
        title: 'Hot Towel Shave',
        price: '$35',
        description: 'Traditional straight razor shave with hot towels.'
    },
    {
        id: 4,
        title: 'Hair Color',
        price: '$50+',
        description: 'Grey blending or full color change.'
    },
    {
        id: 5,
        title: 'Facial Treatment',
        price: '$40',
        description: 'Deep cleansing and exfoliating facial.'
    },
    {
        id: 6,
        title: 'Kids Cut',
        price: '$25',
        description: 'Stylish cuts for the little gentlemen.'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-barber-black">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">Our Services</h2>
                    <div className="w-20 h-0.5 bg-barber-gold mx-auto mb-5"></div>
                    <p className="text-barber-muted text-lg">Quality cuts and grooming for the modern gentleman.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div className="bg-barber-surface p-8 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300 border border-transparent hover:-translate-y-1 hover:shadow-xl hover:border-barber-gold group" key={service.id}>
                            <div className="flex-1">
                                <h3 className="text-2xl text-white mb-2 font-heading">{service.title}</h3>
                                <p className="text-barber-muted text-sm">{service.description}</p>
                            </div>
                            <div className="font-heading text-2xl text-barber-gold font-bold md:ml-5">
                                {service.price}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
