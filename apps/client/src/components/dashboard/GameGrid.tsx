import React from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Clock, Target } from 'lucide-react';
import { toast } from './../ui/toaster';

const GameGrid: React.FC = () => {
  const games = [
    {
      id: 1,
      title: 'Math Quest',
      description: 'Solve mathematical puzzles and equations',
      difficulty: 'Easy',
      duration: '10 min',
      category: 'Mathematics',
      icon: '🔢',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Science Explorer',
      description: 'Discover scientific concepts through experiments',
      difficulty: 'Medium',
      duration: '15 min',
      category: 'Science',
      icon: '🧪',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Language Arts',
      description: 'Improve reading and writing skills',
      difficulty: 'Easy',
      duration: '12 min',
      category: 'Language',
      icon: '📚',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'History Time',
      description: 'Travel through time and learn history',
      difficulty: 'Medium',
      duration: '18 min',
      category: 'History',
      icon: '🏛️',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'Geography Challenge',
      description: 'Explore the world and its countries',
      difficulty: 'Hard',
      duration: '20 min',
      category: 'Geography',
      icon: '🌍',
      color: 'from-teal-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Logic Puzzles',
      description: 'Train your brain with logical thinking',
      difficulty: 'Hard',
      duration: '25 min',
      category: 'Logic',
      icon: '🧩',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const handleGameClick = (game: typeof games[0]) => {
    toast.success(`Starting ${game.title}! 🎮`);
    // In a real app, this would navigate to the game
    console.log(`Starting game: ${game.title}`);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'text-green-400 bg-green-500/20';
      case 'Medium':
        return 'text-yellow-400 bg-yellow-500/20';
      case 'Hard':
        return 'text-red-400 bg-red-500/20';
      default:
        return 'text-gray-400 bg-gray-500/20';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      <div className="flex items-center space-x-2 mb-6">
        <Play className="w-6 h-6 text-purple-400" />
        <h2 className="text-xl font-bold text-white">Educational Games</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => handleGameClick(game)}
            className="bg-white/5 hover:bg-white/10 rounded-xl p-4 border border-white/10 cursor-pointer transition-all duration-200 hover:scale-105 group"
          >
            <div className="flex items-start justify-between mb-3">
              <div className={`w-12 h-12 bg-gradient-to-r ${game.color} rounded-lg flex items-center justify-center text-2xl`}>
                {game.icon}
              </div>
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                {game.difficulty}
              </div>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {game.title}
            </h3>
            
            <p className="text-sm text-gray-300 mb-4 line-clamp-2">
              {game.description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{game.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Target className="w-3 h-3" />
                <span>{game.category}</span>
              </div>
            </div>

            <div className="mt-3 flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <Star className="w-4 h-4 text-gray-400" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GameGrid; 