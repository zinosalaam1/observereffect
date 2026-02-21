import { motion } from 'motion/react';
import { Trophy, RotateCcw, Sparkles } from 'lucide-react';
import { RoomData } from '../App';

interface FinalRevealProps {
  roomData: RoomData;
  username: string;
  onRestart: () => void;
}

export function FinalReveal({ roomData, username, onRestart }: FinalRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="space-y-8 sm:space-y-12 text-center px-4 sm:px-0"
    >
      {/* Victory Icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
        className="flex justify-center"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 30px rgba(34, 197, 94, 0.3)',
              '0 0 60px rgba(34, 197, 94, 0.6)',
              '0 0 30px rgba(34, 197, 94, 0.3)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center"
        >
          <Trophy className="w-12 h-12 text-white" />
        </motion.div>
      </motion.div>

      {/* Victory Message */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="space-y-4"
      >
        <motion.div 
          className="text-6xl sm:text-8xl md:text-9xl font-light"
          style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
          animate={{
            textShadow: [
              '0 0 20px rgba(255,255,255,0.3)',
              '0 0 40px rgba(255,255,255,0.6)',
              '0 0 20px rgba(255,255,255,0.3)',
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          F
        </motion.div>
        <h2 className="text-3xl sm:text-4xl font-light tracking-wider">SOLVED</h2>
        <div className="space-y-2">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-green-400 text-base sm:text-lg font-medium"
          >
            Congratulations, {username}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-2 text-zinc-500 text-sm"
          >
            <Sparkles className="w-4 h-4" />
            <span>You are among the 5–10%</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>

      {/* Solution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="border border-zinc-800 p-6 sm:p-8 bg-gradient-to-br from-zinc-950 to-black space-y-6 text-left max-w-2xl mx-auto relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
        />

        <h3 className="text-xl sm:text-2xl font-light text-center mb-6 relative z-10">THE SOLUTION</h3>
        
        <div className="space-y-4 text-xs sm:text-sm text-zinc-300 relative z-10">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="border-l-2 border-zinc-700 pl-4 py-2 hover:border-white transition-colors"
          >
            <p className="text-zinc-500 text-xs mb-1 uppercase tracking-wide">Room 1 — The Count</p>
            <p className="leading-relaxed">Count letters in each word: <span className="font-mono">ONE(3) + TWO(3) + THREE(5) + FOUR(4) + FIVE(4)</span> = <span className="text-white font-medium">19</span></p>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2 }}
            className="border-l-2 border-zinc-700 pl-4 py-2 hover:border-white transition-colors"
          >
            <p className="text-zinc-500 text-xs mb-1 uppercase tracking-wide">Room 2 — The Mirror</p>
            <p className="leading-relaxed">Mirror each digit: <span className="font-mono">1→1, 9→6</span> = <span className="text-white font-medium">16</span></p>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="border-l-2 border-zinc-700 pl-4 py-2 hover:border-white transition-colors"
          >
            <p className="text-zinc-500 text-xs mb-1 uppercase tracking-wide">Room 3 — The Shift</p>
            <p className="leading-relaxed"><span className="font-mono">16 = P</span> (16th letter). Shift forward → <span className="text-white font-medium">Q</span></p>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.4 }}
            className="border-l-2 border-zinc-700 pl-4 py-2 hover:border-white transition-colors"
          >
            <p className="text-zinc-500 text-xs mb-1 uppercase tracking-wide">Room 4 — The Distraction</p>
            <p className="leading-relaxed">Perfect sequence Q,R,S,T,U. Nothing to remove, keep middle: <span className="text-white font-medium">S</span></p>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.6 }}
            className="border-l-2 border-yellow-700 pl-4 py-2 hover:border-yellow-500 transition-colors"
          >
            <p className="text-yellow-600 text-xs mb-1 uppercase tracking-wide">Room 5 — The Trap</p>
            <p className="leading-relaxed">Keep only transformed: <span className="font-mono">16→Q</span>. Remove 16, 19, S. Keep: <span className="text-white font-medium">Q</span></p>
          </motion.div>

          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="border-l-2 border-white pl-4 py-2 bg-white/5"
          >
            <p className="text-white text-xs mb-2 uppercase tracking-wide">Room 6 — The Observer</p>
            <div className="space-y-1 leading-relaxed">
              <p>Return to Room 1 with new perspective:</p>
              <p className="text-xs font-mono">UNIQUE letters: O,N,E,T,W,H,R,F,U,I,V = 11</p>
              <p className="text-xs font-mono">11 → K (11th letter)</p>
              <p className="text-xs font-mono">Q(17) - K(11) = 6</p>
              <p className="text-xs font-mono">6 → <span className="text-white text-base font-bold">F</span></p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="pt-6 border-t border-zinc-800 relative z-10"
        >
          <p className="text-xs text-zinc-600 italic text-center">
            "The puzzle changes when you understand it."
          </p>
        </motion.div>
      </motion.div>

      {/* Why People Fail */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 1 }}
        className="space-y-4 max-w-xl mx-auto"
      >
        <p className="text-zinc-600 text-xs uppercase tracking-wider">Why Only 5–10% Pass</p>
        <div className="text-xs sm:text-sm text-zinc-500 space-y-2">
          {[
            'They assume linear logic',
            'They don\'t re-evaluate earlier rooms',
            'They discard original data',
            'They stop observing once they think they understand',
            'They forget the title: "Observer Effect"'
          ].map((reason, index) => (
            <motion.p
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 3.4 + index * 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="text-zinc-700">•</span>
              {reason}
            </motion.p>
          ))}
        </div>
      </motion.div>

      {/* Restart Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 4 }}
        className="pt-8"
      >
        <motion.button
          onClick={onRestart}
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 0 30px rgba(255,255,255,0.2)'
          }}
          whileTap={{ scale: 0.95 }}
          className="group px-8 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all text-sm tracking-wider inline-flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
          RESTART PUZZLE
        </motion.button>
      </motion.div>

      {/* Final Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.5, duration: 1 }}
        className="text-xs text-zinc-800 pt-8"
      >
        The puzzle punishes certainty.
      </motion.p>
    </motion.div>
  );
}