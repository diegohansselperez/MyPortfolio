import { useState } from 'react';

const skills = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 85, category: 'frontend' },
  { name: 'React', level: 80, category: 'frontend' },
  { name: 'TypeScript', level: 80, category: 'frontend' },
  { name: 'TailwindCSS', level: 80, category: 'frontend' },
  { name: 'Redux', level: 90, category: 'frontend' },
  { name: 'React Native', level: 80, category: 'frontend' },

  ///Backend
  { name: 'Node', level: 80, category: 'backend' },
  { name: 'Express', level: 90, category: 'backend' },
  { name: 'PostgraSQL', level: 80, category: 'backend' },
  { name: 'Sequelize', level: 70, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },

  //Tools
  { name: 'Git/GitHub', level: 80, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
  { name: 'Jest', level: 70, category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filterCategories = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory,
  );

  return (
    <section id="#skills" className="relative h- py-24 px-4 bg-sencondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills <span className="text-[hsl(var(--primary))]">Tech</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`py-3 px-2 rounded-full bg-[] transition-colors duration-300 capitalize ${
                activeCategory === category
                  ? 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]   '
                  : 'bg-[hsl(var(--secondary)/0.7)] text-[hsl(var(--foreground))] hover:bg-gray-600 '
              } `}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 text-center  lg:grid-cols-3 gap-x-2 gap-y-3 sm:gap-6">
          {filterCategories.map((skill, key) => (
            <article
              key={key}
              className="bg-[hsl(var(--card))]  p-2 sm:p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-[hsl(var(--secondary)/0.5)] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[hsl(var(--primary))] h-2 origin-left rounded-full animate-[grow_1.5s_ease-out] "
                  style={{ width: skill.level + '%' }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-[hsl(var(--foreground))]">
                  {skill.level}%
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /*  <div className="">
        <ul>
          <li>
            <i className="bx bxl-html5"></i>
          </li>
          <li>
            <i className="bx bxl-css3"></i>
          </li>
          <li>
            <i className="bx bxl-javascript"></i>
          </li>
          <li>
            <i className="bx bxl-react"></i>
          </li>
        </ul>
        <ul>
          <li>
            <i className="bx bxl-nodejs"></i>
          </li>
          <li>
            <i className="bx bxl-postgresql"></i>
          </li>

          <li>
            <i className="bx bxl-redux"></i>
          </li>
          <li>
            <i className="bx bxl-typescript"></i>
          </li>
        </ul>
        <ul>
          <li>
            <i className="bx bxl-tailwind-css"></i>
          </li>
          <li>
            <i className="bx bxl-mongodb"></i>
          </li>
          <li>
            <i className="bx bxl-git"></i>
          </li>
          <li className="">express</li>
        </ul>
      </div> */
}
