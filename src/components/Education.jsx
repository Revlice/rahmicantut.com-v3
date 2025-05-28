import { motion } from "framer-motion";

const educationData = [
    {
        school: "Yalova University",
        degree: "Associate Degree in Emergency and First Aid",
        period: "2023 - 2025",
        description:
            "An associate degree program focused on providing essential skills and knowledge for emergency medical care and first aid response.",
    },
    {
        school: "Ankara University",
        degree: "Associate Degree in Web Design and Coding",
        period: "2024 - 2026",
        description:
            "An associate degree program that teaches fundamental skills in web design and coding for creating modern websites.",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const Education = () => {
    return (
        <section
            id="education"
            className="min-h-screen flex flex-col items-center px-4 py-16 bg-background"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold text-yellow-400 mb-2">
                    Education
                </h2>
                <span className="text-gray-400 text-sm md:text-base">Where I Studied</span>
            </div>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl max-w-full">
                {educationData.map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-700/30 hover:bg-gray-600/50 border border-yellow-400 rounded-lg p-6 shadow-lg cursor-pointer"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        custom={index}
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-bold mb-1">{item.school}</h3>
                        <p className="text-yellow-400 font-semibold mb-1">{item.degree}</p>
                        <p className="text-gray-400 italic mb-4">{item.period}</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
