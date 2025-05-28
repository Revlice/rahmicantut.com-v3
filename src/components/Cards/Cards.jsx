import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const Cards = ({ title, tools }) => {
    return (
        <motion.div
            className="bg-gray-500/10 hover:border  border-yellow-400 text-white shadow-md rounded-lg p-6 w-full "
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.05}}
        >
            <h3 className="text-xl font-bold mb-4 text-center">{title}</h3>
            <ul className="space-y-3">
                {tools.map((tool, index) => (
                    <li
                        key={index}
                        className="flex items-center font-light text-sm gap-3 bg-background px-3 py-1 rounded-md hover:bg-yellow-400 duration-500 transition"
                    >
                        <span className="text-xl">{tool.icon}</span>
                        <span>{tool.name}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export default Cards;
