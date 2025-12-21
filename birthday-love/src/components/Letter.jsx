import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Letter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="py-24 bg-white flex flex-col items-center justify-center relative overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <span className="text-accent-rose font-serif text-2xl lowercase italic">a little note for you</span>
            </motion.div>

            <div className="relative w-full max-w-2xl px-6">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    layout
                    onClick={() => setIsOpen(!isOpen)}
                    className={`cursor-pointer glass p-8 md:p-12 rounded-3xl shadow-2xl border border-accent-rose/10 transition-all duration-500 ${isOpen ? 'bg-white shadow-deep-rose/10' : 'bg-soft-pink/20'}`}
                >
                    <div className="flex justify-between items-start mb-8">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-accent-rose/20 flex items-center justify-center text-deep-rose">
                            💌
                        </div>
                        <span className="text-gray-400 font-serif text-lg italic">Dec 20, 2025</span>
                    </div>

                    <motion.div layout className="space-y-6">
                        <h3 className="text-3xl font-serif text-deep-rose">Dearest Sefali,</h3>

                        <p className="text-gray-600 leading-relaxed font-light text-lg">
                            Words often fail to capture the depth of what I want to express. You are not just a year older today, but a year more incredible, a year more wonderful.
                        </p>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-4"
                                >
                                    <p className="text-gray-600 leading-relaxed font-light text-lg">
                                        I hope this new chapter brings you as much happiness as you've brought into my life. Watching you grow, laugh, and shine is my favorite part of every day.
                                    </p>
                                    <p className="text-gray-600 leading-relaxed font-light text-lg">
                                        Always remember that you are loved beyond measure, and that you have the strength to achieve everything your heart desires.
                                    </p>
                                    <div className="pt-8">
                                        <p className="text-deep-rose font-serif text-2xl italic">With all my love,</p>
                                        <p className="text-accent-rose font-semibold tracking-widest text-sm uppercase mt-1">Akash</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!isOpen && (
                            <motion.div
                                animate={{ opacity: [0.4, 1, 0.4] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-center pt-4 text-accent-rose font-semibold text-sm uppercase tracking-tighter"
                            >
                                Click to read more...
                            </motion.div>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Letter;
