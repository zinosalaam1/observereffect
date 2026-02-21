import { useState } from 'react';
import { motion } from 'motion/react';
import { Eye } from 'lucide-react';

interface IntroductionProps {
  onStart: (username: string) => void;
}

export function Introduction({ onStart }: IntroductionProps) {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim().length >= 2) {
      onStart(username.trim());
    } else {
      setError(true);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center space-y-8 px-4"
    >
      {/* Logo/Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 1, type: 'spring' }}
        className="flex justify-center"
      >
        <div className="relative">
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(255,255,255,0.1)',
                '0 0 40px rgba(255,255,255,0.2)',
                '0 0 20px rgba(255,255,255,0.1)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center bg-zinc-950"
          >
            <Eye className="w-12 h-12 text-white" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-wider mb-2">
          THE OBSERVER EFFECT
        </h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-zinc-500 text-xs sm:text-sm tracking-widest"
        >
          TOUR ARCADE PRESENTS
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="space-y-6 max-w-xl mx-auto"
      >
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="border border-zinc-800 p-6 sm:p-8 bg-gradient-to-br from-zinc-950 to-black relative overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          />
          <p className="text-sm sm:text-base font-light mb-3 text-zinc-400 relative z-10">Core Rule:</p>
          <p className="text-xl sm:text-2xl font-light relative z-10">
            The puzzle changes when you understand it.
          </p>
        </motion.div>

        <div className="space-y-3 text-zinc-400 text-sm sm:text-base">
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            There are 6 Rooms.
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Each room gives you something.
          </motion.p>
          <motion.p
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="text-zinc-200"
          >
            But what it gives you is not what you keep.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="pt-4"
        >
          <p className="text-xs text-zinc-600 mb-6">
            Only about 5–10% solve it without assistance.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your name"
              maxLength={20}
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
              className="w-full max-w-xs mx-auto block px-6 py-3 bg-black border border-zinc-700 focus:border-white outline-none text-center tracking-wider transition-colors text-sm sm:text-base"
            />
            
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black hover:bg-zinc-200 transition-all text-sm tracking-wider font-medium"
            >
              BEGIN
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="text-xs text-zinc-700 pt-8"
      >
        The puzzle punishes certainty.
      </motion.p>
    </motion.div>
  );
}
