import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-soft-pink to-white px-4">
            {/* Decorative Floating Elements */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-32 h-32 bg-warm-peach rounded-full blur-3xl opacity-60"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-10 w-48 h-48 bg-accent-rose rounded-full blur-3xl opacity-30"
            />

            <div className="relative z-10 text-center pb-24">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-deep-rose uppercase bg-white/50 backdrop-blur-sm rounded-full border border-accent-rose/20 shadow-sm"
                >
                    Special Wish for a Special Soul
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-5xl md:text-8xl font-serif text-deep-rose mb-6 drop-shadow-sm px-2 leading-tight"
                >
                    Happy Birthday, <br />
                    <span className="text-accent-rose italic">Sefali</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="max-w-xl mx-auto text-lg md:text-xl text-gray-600 font-light leading-relaxed px-6"
                >
                    To the one who makes every moment brighter. Today is all about you and the beautiful light you bring into this world.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-deep-rose/50 font-semibold">Scroll to explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-deep-rose/50 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
