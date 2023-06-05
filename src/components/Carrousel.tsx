import React from 'react';

export default function Carousel() {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan sagittis nulla, vitae laoreet tellus varius vitae.",
        },
        {
            id: 2,
            name: "Jane Smith",
            comment: "Nulla facilisi. Mauris et velit eu tellus ultricies commodo. In vitae eleifend lorem, sit amet varius urna.",
        },
        {
            id: 3,
            name: "David Johnson",
            comment: "Sed tincidunt consectetur semper. Duis ac rutrum leo. Suspendisse volutpat vitae neque sed placerat.",
        },
    ];

    const [activeIndex, setActiveIndex] = React.useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="relative overflow-hidden">
                <div className="flex -mx-4">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`w-full px-4 transition-opacity duration-300 ${index === activeIndex ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <p className="text-gray-800 text-lg mb-4">{testimonial.comment}</p>
                                <p className="text-gray-600 font-semibold">{testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300"
                    onClick={handlePrev}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300"
                    onClick={handleNext}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

