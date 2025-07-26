import React, { useState, useMemo } from "react";

// Sample data - in a real app, this would come from props or an API
const allEquipment = [
  {
    id: 1,
    name: "HDD Maxi-Rig",
    category: "Boring Machines",
    imageUrl:
      "https://images.unsplash.com/photo-1553142289-216a6a1b2d7e?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Compact Auger Drill",
    category: "Boring Machines",
    imageUrl:
      "https://images.unsplash.com/photo-1629930784483-53d712a833a6?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Hydraulic Pipe Jack",
    category: "Pushing & Jacking",
    imageUrl:
      "https://images.unsplash.com/photo-1617208100025-55e1de75333f?q=80&w=2864&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Heavy-Duty Rock Breaker",
    category: "Excavation & Breakers",
    imageUrl:
      "https://images.unsplash.com/photo-1522022718485-7096e5792d47?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Trenching Machine",
    category: "Excavation & Breakers",
    imageUrl:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6ef5f3?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Mobile Generator Unit",
    category: "Support Equipment",
    imageUrl:
      "https://images.unsplash.com/photo-1600579038714-353278563345?q=80&w=2866&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Directional Drill",
    category: "Boring Machines",
    imageUrl:
      "https://images.unsplash.com/photo-1619463261749-51d2047a5137?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Pneumatic Pipe Rammer",
    category: "Pushing & Jacking",
    imageUrl:
      "https://images.unsplash.com/photo-1543373122-6c16c6808dc1?q=80&w=2940&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "Portable Air Compressor",
    category: "Support Equipment",
    imageUrl:
      "https://images.unsplash.com/photo-1621992300039-f9c381f1816f?q=80&w=2940&auto=format&fit=crop",
  },
];

const EquipmentCard = ({ name, imageUrl }) => (
  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
    <img
      src={imageUrl}
      alt={name}
      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-900 bg-opacity-70 p-4 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <h3 className="font-lato text-xl font-bold text-white">{name}</h3>
      <a
        href="#"
        className="mt-2 font-lato text-base text-yellow-400 transition-colors hover:text-yellow-300"
      >
        View Details →
      </a>
    </div>
  </div>
);

const EquipmentGallery = () => {
  const categories = [
    "All",
    "Boring Machines",
    "Pushing & Jacking",
    "Excavation & Breakers",
    "Support Equipment",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEquipment = useMemo(() => {
    if (activeCategory === "All") {
      return allEquipment;
    }
    return allEquipment.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-lato text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Fleet
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 font-lato text-sm font-bold transition-colors duration-300 sm:text-base ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredEquipment.map((equipment) => (
            <EquipmentCard
              key={equipment.id}
              name={equipment.name}
              imageUrl={equipment.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EquipmentGallery;
