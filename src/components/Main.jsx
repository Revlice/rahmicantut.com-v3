import { FaLinkedin, FaGithub, FaSpotify } from "react-icons/fa";
import { motion } from "framer-motion";

const Main = () => {
    const links = [
        { icon: <FaLinkedin />, to: "https://www.linkedin.com/in/rahmican-tut-37a165265/" },
        { icon: <FaGithub />, to: "https://github.com/Revlice" },
        { icon: <FaSpotify />, to: "https://open.spotify.com/user/aolhhguvxt6z7xvaw9ysk34gk" },
    ];

    return (
        <div
            id="home"
            className="w-full min-h-screen flex flex-col items-center px-4 py-52"
        >
            {/* Başlık animasyonu */}
            <motion.h1
                className="text-center text-white text-2xl sm:text-4xl md:text-6xl leading-tight font-bold mb-12"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Hi! I am{" "}
                <span className="relative inline-block">
                    <span className="relative z-10 animate-gradient bg-gradient-to-r from-yellow-600 via-yellow-200 to-yellow-600 bg-[length:200%_200%] bg-clip-text text-transparent">
                        Rahmican TUT
                    </span>
                    <span className="absolute inset-0 animate-gradient bg-gradient-to-r from-yellow-600/20 via-yellow-200/20 to-yellow-600/20 bg-[length:200%_200%] blur-[2px] transform -rotate-1 translate-y-1"></span>
                </span>
                !
            </motion.h1>

            {/* Açıklama */}
            <motion.span
                className="text-center text-gray-400 text-sm md:text-2xl max-w-2xl px-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >
                I’m a student and a full-stack developer passionate about building web applications using the MERN stack. Always eager to learn and create impactful projects.
            </motion.span>

            {/* Sosyal ikonlar */}
            <motion.ul
                className="inline-flex mt-12 gap-x-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                {links.map((item, index) => (
                    <motion.li
                        key={index}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <a
                            href={item.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl md:text-3xl text-gray-400 hover:text-white transition duration-300"
                        >
                            {item.icon}
                        </a>
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default Main;
