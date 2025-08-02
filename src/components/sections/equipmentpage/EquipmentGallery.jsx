import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Wrench } from 'lucide-react'; // Hum ek icon istemal karenge

// Naya Placeholder component
// Yeh tab dikhega jab image URL maujood na ho.
const ImagePlaceholder = ({ name }) => (
  <div className='bg-my-secondary/20 flex aspect-[4/3] w-full flex-col items-center justify-center rounded-sm p-4 text-center'>
    <Wrench className='text-my-primary/50 h-16 w-16' />
    <p className='font-body text-my-primary mt-4 text-base font-semibold'>
      {name}
    </p>
    <p className='font-body text-my-secondary mt-1 text-xs'>
      Image not available
    </p>
  </div>
);

const EquipmentCard = ({ name, imageUrl, category }) => (
  <div className='group relative w-full overflow-hidden rounded-sm shadow-lg'>
    {/* Conditional rendering: Agar imageUrl hai to image, warna placeholder */}
    {imageUrl ? (
      <img
        src={imageUrl}
        alt={name}
        className='aspect-[4/3] h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110'
      />
    ) : (
      <ImagePlaceholder name={name} />
    )}
    <div className='bg-opacity-70 bg-my-primary absolute inset-0 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100'>
      <p className='font-body text-my-accent/90 text-sm font-semibold tracking-wider uppercase'>
        {category}
      </p>
      <h3 className='font-body mt-1 text-xl font-bold text-white'>{name}</h3>
      <Link
        to='/contact'
        className='font-body text-my-accent/90 hover:text-my-accent mt-4 text-base font-bold transition-colors'
      >
        Inquire About This Equipment →
      </Link>
    </div>
  </div>
);

const EquipmentGallery = ({ title, categories = [], equipment = [] }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEquipment = useMemo(() => {
    if (activeCategory === 'All') {
      return equipment;
    }
    return equipment.filter((item) => item.category === activeCategory);
  }, [activeCategory, equipment]);

  return (
    <div className='bg-white py-16 sm:py-24'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='text-center'>
          {/* The component's title, passed in as a prop. */}
          <h2 className='font-body text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
            {title}
          </h2>
        </div>

        {/* Renders the category filter buttons. */}
        <div className='mt-10 flex flex-wrap justify-center gap-2 sm:gap-4'>
          {categories.map((category) => (
            <button
              key={category}
              // Updates the active category on click.
              onClick={() => setActiveCategory(category)}
              // Applies conditional styling for the active button.
              className={`font-body cursor-pointer rounded-sm px-4 py-2 text-sm font-bold transition-colors duration-300 sm:text-base ${
                activeCategory === category
                  ? 'bg-my-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Displays the grid of equipment cards. */}
        <div className='mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {filteredEquipment.map((item) => (
            <EquipmentCard
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentGallery;
