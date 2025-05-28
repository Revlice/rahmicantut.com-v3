import Cards from './Cards/Cards.jsx';
import { cardsData } from "./Cards/cardsData.jsx";

const Skills = () => {
    return (
        <section id="skills" className="w-full py-12 lg:py-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-2">Skills</h2>
                <p className="text-gray-400 text-sm md:text-base">Tools & Technologies I use</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {cardsData.map((card, index) => (
                    <Cards key={index} title={card.title} tools={card.tools} />
                ))}
            </div>
        </section>
    );
};

export default Skills;
