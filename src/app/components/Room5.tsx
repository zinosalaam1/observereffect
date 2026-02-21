import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { RoomData } from '../App';

interface Room5Props {
  onComplete: (value: string) => void;
  username: string;
  roomData: RoomData;
}

export function Room5({ onComplete, username, roomData }: Room5Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === 'Q') {
      onComplete('Q');
    } else {
      setError(true);
      setAttempts(prev => prev + 1);
      setTimeout(() => setError(false), 500);
    }
  };

  const collectedValues = [
    { label: 'Room 1', value: roomData.room1 },
    { label: 'Room 2', value: roomData.room2 },
    { label: 'Room 3', value: roomData.room3 },
    { label: 'Room 4', value: roomData.room4 },
  ];

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
                '0 0 20px rgba(239, 68, 68, 0.3)',
                '0 0 40px rgba(239, 68, 68, 0.5)',
                '0 0 20px rgba(239, 68, 68, 0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-red-500 text-white flex items-center justify-center mb-4"
          >
            <span className="text-xl font-bold">5</span>
          </motion.div>
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl sm:text-3xl font-light tracking-wider text-red-400"
        >
          THE TRAP
        </motion.h2>
        {username && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xs text-zinc-600 mt-2"
          >
            Observer: {username}
          </motion.p>
        )}
      </div>

      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="border border-zinc-800 p-6 sm:p-8 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 relative overflow-hidden"
      >
        <p className="text-zinc-500 text-xs text-center mb-6 tracking-wider uppercase">You now have:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {collectedValues.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                delay: 1 + index * 0.2,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                boxShadow: '0 0 20px rgba(255,255,255,0.2)'
              }}
              className="border border-zinc-800 p-4 text-center bg-black cursor-pointer"
            >
              <div className="text-xs text-zinc-600 mb-2">{item.label}</div>
              <motion.div 
                className="text-xl sm:text-2xl font-light"
                style={{ color: '#a1a1aa' }}
                animate={{
                  color: index === 1 || index === 2 ? ['#a1a1aa', '#ffffff', '#a1a1aa'] : '#a1a1aa'
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {item.value}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="text-center space-y-6"
      >
        <p className="text-zinc-500 text-xs sm:text-sm tracking-wider uppercase">Instruction</p>
        <motion.p 
          style={{ color: '#ffffff' }}
          animate={{ 
            opacity: [1, 0.5, 1],
            color: ['#ffffff', '#ef4444', '#ffffff']
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-xl sm:text-2xl font-light"
        >
          "Only keep what was transformed."
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
            className="mb-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your answer"
              className="w-full max-w-xs px-6 py-3 bg-black border border-zinc-700 focus:border-red-500 outline-none text-center tracking-wider uppercase transition-all text-sm sm:text-base"
            />
          </motion.div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: '#27272a' }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 bg-zinc-900 border border-zinc-700 transition-all text-sm tracking-wider inline-flex items-center gap-2"
          >
            SUBMIT
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}