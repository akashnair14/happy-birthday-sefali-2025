import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Countdown = ({ onFinish }) => {
    const [isFinished, setIsFinished] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0, hours: 0, minutes: 0, seconds: 0
    });

    const [targetDate] = useState(new Date().getTime() + 5000);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                clearInterval(timer);
                setIsFinished(true);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                // Delay the reveal slightly to enjoy the celebration state
                setTimeout(() => {
                    onFinish();
                }, 2000);
            } else {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const TimeUnit = ({ value, label }) => (
        <div className="flex flex-col items-center px-3 py-4 md:px-4 md:py-6 min-w-[75px] md:min-w-[100px] glass rounded-2xl shadow-lg border border-white/40">
            <span className="text-3xl md:text-5xl font-bold text-deep-rose mb-1">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-semibold">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-20 bg-white flex flex-col items-center justify-center min-h-[400px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center px-4 mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-serif text-deep-rose mb-2">
                    {isFinished ? "The Celebration Begins!" : "Countdown to the Big Surprise"}
                </h2>
                <p className="text-gray-400 italic">Every second brings us closer...</p>
            </motion.div>

            <AnimatePresence mode="wait">
                {!isFinished ? (
                    <motion.div
                        key="timer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        className="flex flex-wrap justify-center gap-4 px-4"
                    >
                        <TimeUnit value={timeLeft.days} label="Days" />
                        <TimeUnit value={timeLeft.hours} label="Hours" />
                        <TimeUnit value={timeLeft.minutes} label="Mins" />
                        <TimeUnit value={timeLeft.seconds} label="Secs" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="celebration"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center"
                    >
                        <div className="text-6xl mb-4 animate-bounce">🎉🎂✨</div>
                        <p className="text-2xl font-serif text-accent-rose">It's Time to Celebrate Sefali!</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Countdown;
