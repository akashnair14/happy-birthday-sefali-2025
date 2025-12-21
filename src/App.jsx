import React from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import TimelineGallery from './components/TimelineGallery';
import Letter from './components/Letter';
import Surprise from './components/Surprise';


function App() {
  const [showContent, setShowContent] = React.useState(false);

  return (
    <div className="App">
      {!showContent ? (
        <Countdown onFinish={() => setShowContent(true)} />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Hero />
          <TimelineGallery />
          <Letter />
          <Surprise />
        </motion.div>
      )}
    </div>
  );
}

export default App;
