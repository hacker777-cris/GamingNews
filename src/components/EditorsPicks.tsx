import React from 'react';

const editorsPicks = [
  {
    id: 1,
    title: "The Rise of African Gaming: A Deep Dive",
    image: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&q=80",
    author: "Sarah Johnson",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "How African Developers are Reshaping the Gaming Industry",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80",
    author: "Michael Okonjo",
    readTime: "4 min read"
  }
];

const EditorsPicks = () => {
  return (
    <section className="space-y-8">
      <h2 className="text-3xl font-bold">Editor's Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {editorsPicks.map((pick) => (
          <div key={pick.id} className="card group cursor-pointer">
            <div className="relative h-64">
              <img
                src={pick.image}
                alt={pick.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60"></div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-semibold group-hover:text-neon-green transition-colors">
                {pick.title}
              </h3>
              <div className="flex items-center space-x-4 text-gray-400">
                <span>{pick.author}</span>
                <span>•</span>
                <span>{pick.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EditorsPicks;