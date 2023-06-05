import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'componente por terminar',
      image: 'person_1.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Jane Smith',
      comment: 'componente por terminar',
      image: 'person_2.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'David Johnson',
      comment: 'componente por terminar',
      image: 'person_3.jpg',
      rating: 5
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Configura um timer para avançar o carousel a cada segundo
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    }, 5000);

    // Limpa o timer quando o componente é desmontado
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleIndicatorClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0 hidden'
            }`}
          onMouseEnter={() => setCurrentIndex(index)}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt="Imagem do Usuário"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
              </div>
            </div>
            <div className="flex items-center mb-4">
              {/* Ícones de estrelas */}
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 fill-current ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1l2.928 6.097L20 7.222l-5 4.868 1.179 6.87L10 15.789l-6.179 3.171L5 12.09 0 7.222l7.072-.125L10 1zm0 0"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-800 text-lg mb-4">{testimonial.comment}</p>
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-4">
        {/* Indicadores */}
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full mx-2 cursor-pointer ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
