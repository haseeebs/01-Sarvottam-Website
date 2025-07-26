import React, { useState, useEffect } from "react";

const projectsData = [
  {
    id: 1,
    title: "Expressway Culvert Crossing",
    category: "Crossing Services",
    imageUrl:
      "https://images.unsplash.com/photo-1618062582882-99c55b77fac1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Railway Line Box Pushing",
    category: "Pushing & Jacking",
    imageUrl:
      "https://images.unsplash.com/photo-1552882462-429a3a1f82e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "City Center Utility Tunnel",
    category: "Boring Services",
    imageUrl:
      "https://images.unsplash.com/photo-1581094541334-875953684a96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Riverbed Pipeline Installation",
    category: "Crossing Services",
    imageUrl:
      "https://images.unsplash.com/photo-1542037104857-4bb4b98e2474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: "Urban Micro-tunneling",
    category: "Boring Services",
    imageUrl:
      "https://images.unsplash.com/photo-1589599069491-23a6979893a6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: "Canal Underpass Construction",
    category: "Pushing & Jacking",
    imageUrl:
      "https://images.unsplash.com/photo-1628437330329-8774f76b971e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const filters = [
  "All",
  "Crossing Services",
  "Pushing & Jacking",
  "Boring Services",
];

const ProjectPortfolio = ({ title = "Our Complete Portfolio" }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === activeFilter)
      );
    }
  }, [activeFilter]);

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-montserrat text-3xl md:text-4xl font-bold text-[#0D2C54] mb-12">
          {title}
        </h2>

        {/* Filter Controls */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-montserrat font-semibold text-sm py-2 px-5 rounded-full transition-colors duration-300 ${
                activeFilter === filter
                  ? "bg-[#F2B705] text-[#0D2C54]"
                  : "bg-[#E0E4E8] text-[#0D2C54] hover:bg-[#cdd2d8]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-montserrat text-xl font-bold text-[#0D2C54]">
                  {project.title}
                </h3>
                <p className="mt-2 font-lato text-sm text-[#8D99AE]">
                  {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPortfolio;
