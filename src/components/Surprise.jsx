import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Surprise = () => {
    const [isRevealed, setIsRevealed] = useState(false);
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section className="py-24 bg-gradient-to-t from-soft-pink to-white flex flex-col items-center justify-center overflow-hidden min-h-[600px]">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-5xl md:text-6xl font-serif text-deep-rose mb-4 px-4 drop-shadow-sm">Wait, there's more!</h2>
                <p className="text-gray-400 font-light italic text-lg">One last little thing for the birthday girl...</p>
            </motion.div>

            <div className="relative flex items-center justify-center min-h-[300px] w-full max-w-lg px-6">
                <AnimatePresence mode="wait">
                    {!isRevealed ? (
                        <motion.button
                            key="gift"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0, rotate: 10, opacity: 0 }}
                            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsRevealed(true)}
                            className="w-56 h-56 rounded-full bg-[#ff99ac] shadow-[0_20px_50px_rgba(255,143,163,0.3)] flex items-center justify-center transition-all duration-300 relative z-10 group"
                        >
                            <span className="text-7xl transform transition-transform group-hover:scale-110 group-hover:rotate-6">🎁</span>

                            {/* Animated ring around button */}
                            <div className="absolute inset-minus-2 border-2 border-accent-rose/30 rounded-full animate-ping opacity-20" />
                        </motion.button>
                    ) : (
                        <motion.div
                            key="modal"
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.8, y: 20 }}
                            className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(255,143,163,0.25)] border border-accent-rose/10 text-center w-full max-w-[calc(100vw-2rem)] md:max-w-sm relative z-10"
                        >
                            <div className="flex justify-center items-center space-x-4 mb-8">
                                <span className="text-4xl text-yellow-400">✨</span>
                                <span className="text-5xl">❤️</span>
                                <span className="text-4xl text-yellow-400">✨</span>
                            </div>

                            <h3 className="text-3xl font-serif text-deep-rose mb-4 italic">For My Favorite Person</h3>

                            <p className="text-gray-500 mb-8 leading-relaxed font-light text-lg px-2">
                                Here is a cute surprise video for you...!
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setShowVideo(true)}
                                className="w-full py-4 bg-deep-rose text-white rounded-2xl font-semibold shadow-lg shadow-deep-rose/20 hover:bg-accent-rose transition-colors mb-6 flex items-center justify-center gap-3"
                            >
                                <span>▶</span> Watch Your Surprise
                            </motion.button>

                            <button
                                onClick={() => setIsRevealed(false)}
                                className="text-xs font-bold text-gray-400 hover:text-deep-rose uppercase tracking-[0.3em] transition-all duration-300 border-b border-transparent hover:border-accent-rose pb-1"
                            >
                                CLOSE
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Ambient glow backgrounds */}
                {!isRevealed && (
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute w-80 h-80 bg-accent-rose/20 rounded-full blur-[80px]"
                    />
                )}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {showVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setShowVideo(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <video
                                src="/Videos/Video.mp4"
                                controls
                                autoPlay
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={() => setShowVideo(false)}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white flex items-center justify-center transition-colors transition-transform hover:scale-110"
                            >
                                ✕
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <footer className="mt-40 mb-16 flex flex-col items-center gap-6">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-accent-rose to-transparent"
                />

                <div className="text-center space-y-2">
                    <p className="text-gray-400 font-light text-[10px] tracking-[0.6em] uppercase">
                        Made with
                        <motion.span
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="inline-block mx-2 text-deep-rose"
                        >
                            ❤
                        </motion.span>
                        for
                    </p>
                    <p className="font-serif text-3xl text-deep-rose/80 italic lowercase tracking-tight">
                        Sefali
                    </p>
                </div>

                <div className="text-[9px] text-gray-300 font-light tracking-widest pt-4">
                    2025 • Forever & Always
                </div>
            </footer>
        </section>
    );
};

export default Surprise;
