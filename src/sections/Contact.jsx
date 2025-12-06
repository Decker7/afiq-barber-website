import React from 'react';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        service: '',
        date: ''
    });
    const [status, setStatus] = React.useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('http://localhost:3000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', service: '', date: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('error');
                alert(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-barber-black">
            <div className="container grid grid-cols-1 md:grid-cols-2 gap-16">
                <div className="contact-info">
                    <h2 className="text-4xl md:text-5xl mb-5">Visit Us</h2>
                    <div className="w-20 h-0.5 bg-barber-gold mb-10"></div>
                    <div className="mb-8">
                        <h3 className="text-xl text-barber-gold mb-2 font-heading">Location</h3>
                        <p className="text-barber-muted text-base">123 Barber Street, Cityville, ST 12345</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl text-barber-gold mb-2 font-heading">Hours</h3>
                        <p className="text-barber-muted text-base">Mon - Fri: 9am - 8pm</p>
                        <p className="text-barber-muted text-base">Saturday: 10am - 6pm</p>
                        <p className="text-barber-muted text-base">Sunday: Closed</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl text-barber-gold mb-2 font-heading">Contact</h3>
                        <p className="text-barber-muted text-base">Phone: (123) 456-7890</p>
                        <p className="text-barber-muted text-base">Email: info@afiqbarber.com</p>
                    </div>
                </div>

                <div className="bg-barber-surface p-10 rounded-lg shadow-2xl">
                    <h2 className="text-4xl md:text-5xl mb-5">Book Appointment</h2>
                    <div className="w-20 h-0.5 bg-barber-gold mb-10"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-4 bg-barber-black border border-[#333] rounded text-barber-gray font-body text-base outline-none transition-colors duration-300 focus:border-barber-gold"
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 bg-barber-black border border-[#333] rounded text-barber-gray font-body text-base outline-none transition-colors duration-300 focus:border-barber-gold"
                            />
                        </div>
                        <div className="mb-5">
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full p-4 bg-barber-black border border-[#333] rounded text-barber-gray font-body text-base outline-none transition-colors duration-300 focus:border-barber-gold"
                            >
                                <option value="" disabled>Select Service</option>
                                <option value="Classic Haircut">Classic Haircut</option>
                                <option value="Beard Trim">Beard Trim</option>
                                <option value="Hot Towel Shave">Hot Towel Shave</option>
                                <option value="Hair Color">Hair Color</option>
                                <option value="Facial Treatment">Facial Treatment</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                                className="w-full p-4 bg-barber-black border border-[#333] rounded text-barber-gray font-body text-base outline-none transition-colors duration-300 focus:border-barber-gold"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full text-center">
                            {status === 'sending' ? 'Booking...' : 'Book Now'}
                        </button>
                        {status === 'success' && <p className="text-green-500 text-center mt-4 font-bold">Booking confirmed!</p>}
                        {status === 'error' && <p className="text-red-500 text-center mt-4 font-bold">Booking failed. Please try again.</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
