import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Eye } from 'lucide-react';
import { RoomData } from '../App';

interface Room6Props {
  onComplete: (value: string) => void;
  username: string;
  roomData: RoomData;
}

export function Room6({ onComplete, username }: Room6Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === 'F') {
      onComplete('F');
    } else {
      setError(true);
      setAttempts(prev => prev + 1);
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ type: 'spring', damping: 20 }}
      className="space-y-8 px-4 sm:px-0"
    >
      <div className="text-center">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="inline-block"
        >
          <motion.div 
            animate={{ 
              boxShadow: [
                '0 0 20px rgba(255,255,255, 0.3)',
                '0 0 60px rgba(255,255,255, 0.6)',
                '0 0 20px rgba(255,255,255, 0.3)',
              ],
              rotate: [0, 360]
            }}
            transition={{ 
              boxShadow: { duration: 2, repeat: Infinity },
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' }
            }}
            className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center mb-4"
          >
            <Eye className="w-8 h-8" />
          </motion.div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl sm:text-3xl font-light tracking-wider"
        >
          THE OBSERVER
        </motion.h2>
        {username && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-zinc-600 mt-2"
          >
            Final Test: {username}
          </motion.p>
        )}
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border border-zinc-800 p-12 sm:p-16 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 text-center relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0"
          animate={{ 
            background: [
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
              'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)',
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="space-y-8 relative z-10"
        >
          <motion.div 
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="text-6xl sm:text-7xl"
          >
            👁
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-zinc-500 text-sm tracking-wider"
          >
            You have reached the final room.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="text-zinc-500 text-sm tracking-wider"
          >
            But you are not done observing.
          </motion.p>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center space-y-6"
      >
        <p className="text-zinc-500 text-xs sm:text-sm tracking-wider uppercase">Final Instruction</p>
        <motion.p
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.5 }}
          className="text-xl sm:text-2xl md:text-3xl font-light"
        >
          <motion.span
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.3)' }}
            animate={{
              textShadow: [
                '0 0 10px rgba(255,255,255,0.3)',
                '0 0 30px rgba(255,255,255,0.6)',
                '0 0 10px rgba(255,255,255,0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            "The answer is what you ignored."
          </motion.span>
        </motion.p>

        {attempts > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center gap-2"
          >
            {Array.from({ length: Math.min(attempts, 5) }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="w-2 h-2 rounded-full bg-red-500/50"
              />
            ))}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="pt-4">
          <motion.div
            animate={error ? { 
              x: [-10, 10, -10, 10, 0],
              rotate: [0, -2, 2, -2, 0]
            } : {}}
            className="mb-6"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter final answer"
              className="w-full max-w-xs px-6 py-3 bg-black border border-zinc-700 focus:border-white outline-none text-center tracking-wider uppercase transition-all text-sm sm:text-base"
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: '#ffffff',
              color: '#000000',
              boxShadow: '0 0 40px rgba(255,255,255,0.5)'
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 bg-white text-black transition-all text-sm tracking-wider font-medium inline-flex items-center gap-2"
          >
            FINAL ANSWER
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}