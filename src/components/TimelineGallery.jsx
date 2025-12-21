import React from 'react';
import { motion } from 'framer-motion';
import PolaroidCard from './PolaroidCard';

const TimelineGallery = () => {
    const memories = [
        { id: 1, image: '/images/memory1.jpeg', caption: 'The Sweetest Moments', rotation: -3 },
        { id: 2, image: '/images/memory2.jpeg', caption: 'Forever & Always', rotation: 4 },
        { id: 3, image: '/images/memory3.jpeg', caption: 'Floating in Joy', rotation: -2 },
    ];

    return (
        <section className="py-20 bg-soft-pink/30 relative overflow-hidden">
            {/* Decorative dots/tape elements could go here */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />

            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-serif text-deep-rose mb-4">Our Memory Scrapbook</h2>
                    <p className="text-gray-500 font-light italic">Every picture tells a story of us...</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-10">
                    {memories.map((memory, index) => (
                        <motion.div
                            key={memory.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <PolaroidCard {...memory} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
        </section>
    );
};

export default TimelineGallery;
