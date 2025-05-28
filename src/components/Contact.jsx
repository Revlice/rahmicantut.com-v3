import { motion } from "framer-motion";

const contactInfo = [
    {
        label: "Full Name",
        value: "Rahmican Tut",
    },
    {
        label: "Email",
        value: "rahmicantut052@gmail.com",
    },
    {
        label: "Location",
        value: "Turkey",
    },
];

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background text-white"
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} // tekrar tetiklenir
                className="text-center mb-10"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-3">
                    Contact
                </h2>
                <p className="text-gray-400 text-base md:text-lg">
                    How you can reach me
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }} // scroll oldukça tekrar animasyon
                className="w-full min-w-2xl bg-gray-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl"
            >
                <ul className="space-y-6">
                    {contactInfo.map((item, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className="flex flex-col sm:flex-row sm:justify-between sm:items-center bg-gray-500/10 px-5 py-4 rounded-xl"
                        >
              <span className="text-yellow-400 font-semibold text-base md:text-lg">
                {item.label}
              </span>
                            <span className="text-gray-300 text-sm md:text-base mt-1 sm:mt-0">
                {item.value}
              </span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </section>
    );
};

export default Contact;
