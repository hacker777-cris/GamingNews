import React from 'react';
import { Monitor, Smartphone, Gamepad2, Trophy, Code } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: "Console Gaming",
    icon: Gamepad2,
    stories: [
      { title: "Next-Gen Console Sales Surge in African Markets", date: "2025-03-15" },
      { title: "Local Gaming Cafes Embrace Console Esports", date: "2025-03-14" }
    ]
  },
  {
    id: 2,
    name: "PC Gaming",
    icon: Monitor,
    stories: [
      { title: "African PC Gaming Market Shows Exponential Growth", date: "2025-03-15" },
      { title: "Cloud Gaming Services Expand Across the Continent", date: "2025-03-14" }
    ]
  },
  {
    id: 3,
    name: "Mobile Gaming",
    icon: Smartphone,
    stories: [
      { title: "Mobile Esports Takes Africa by Storm", date: "2025-03-15" },
      { title: "Local Mobile Game Downloads Hit New Record", date: "2025-03-14" }
    ]
  },
  {
    id: 4,
    name: "Esports",
    icon: Trophy,
    stories: [
      { title: "African Teams Qualify for Global Championships", date: "2025-03-15" },
      { title: "New Esports Academies Open Across Africa", date: "2025-03-14" }
    ]
  },
  {
    id: 5,
    name: "Dev in Africa",
    icon: Code,
    stories: [
      { title: "Game Development Bootcamps Launch in 5 Countries", date: "2025-03-15" },
      { title: "African Game Developers Showcase Innovation", date: "2025-03-14" }
    ]
  }
];

const Categories = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="card p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <category.icon className="h-6 w-6 text-neon-green" />
              <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>
            <div className="space-y-3">
              {category.stories.map((story, index) => (
                <div key={index} className="group cursor-pointer">
                  <h4 className="text-gray-300 group-hover:text-neon-green transition-colors">
                    {story.title}
                  </h4>
                  <span className="text-sm text-gray-500">{story.date}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;