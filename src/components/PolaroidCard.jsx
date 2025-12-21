import React from 'react';
import { motion } from 'framer-motion';

const PolaroidCard = ({ image, caption, rotation = 0 }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
            style={{ rotate: rotation }}
            className="bg-white p-4 pb-12 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col gap-4 transform transition-all duration-300 rounded-sm"
        >
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 rounded-sm">
                <img
                    src={image}
                    alt={caption}
                    className="w-full h-full object-cover filter contrast-[1.05] brightness-95 hover:brightness-100 transition-all duration-500"
                />
                {/* Vintage overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none" />
                <div className="absolute inset-0 shadow-inner pointer-events-none" />
            </div>
            <p className="font-serif text-center text-gray-600 text-xl italic pt-4 tracking-wide">
                {caption}
            </p>
        </motion.div>
    );
};

export default PolaroidCard;
