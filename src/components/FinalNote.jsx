import React from 'react';
import { motion } from 'framer-motion';

const FinalNote = () => {
    return (
        <section className="py-32 px-6 flex flex-col items-center justify-center bg-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeOut" }}
                style={{ rotate: "-2deg" }}
                className="w-full max-w-sm bg-[#fffaf5] p-10 md:p-12 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] rounded-[2rem] relative"
            >
                {/* Subtle paper texture effect using a CSS gradient overlay */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-[2rem]"
                    style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/felt.png")` }} />

                <div className="relative z-10 space-y-8 text-center">
                    <div className="space-y-4">
                        <p className="font-serif text-2xl md:text-3xl text-gray-700 leading-relaxed italic">
                            "Six years ago, I didn’t know this would be us.
                        </p>
                        <p className="font-serif text-2xl md:text-3xl text-gray-700 leading-relaxed italic">
                            Today, I can’t imagine it any other way."
                        </p>
                    </div>

                    <div className="pt-4 space-y-2">
                        <p className="font-serif text-3xl md:text-4xl text-deep-rose">
                            Happy 23rd.
                        </p>
                        <p className="font-serif text-2xl text-accent-rose italic">
                            I love you.
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.footer
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 2 }}
                className="mt-24 text-[10px] tracking-[0.3em] text-gray-300 uppercase font-light"
            >
                Sefali • 2025
            </motion.footer>
        </section>
    );
};

export default FinalNote;
