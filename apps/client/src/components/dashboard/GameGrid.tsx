import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Clock, Target } from 'lucide-react';
import { toast } from './../ui/toaster';
import MultipleChoiceQuiz from '../games/quiz/MultipleChoiceQuiz';
import TrueFalseQuiz from '../games/quiz/TrueFalseQuiz';
import FillInTheBlanksQuiz from '../games/quiz/FillInTheBlanksQuiz';
import MatchTheFollowing from '../games/quiz/MatchTheFollowing';
import CrosswordPuzzle from '../games/puzzle/CrosswordPuzzle';
import SudokuPuzzle from '../games/puzzle/SudokuPuzzle';
import WordSearchPuzzle from '../games/puzzle/WordSearchPuzzle';
import JigsawPuzzle from '../games/puzzle/JigsawPuzzle';
import { useAuth } from '../../contexts/AuthContext';

const GameGrid: React.FC = () => {
  const [activeGame, setActiveGame] = useState<string | null>(null);
  const { currentUser } = useAuth();
  const grade = currentUser?.standard || 5;

  const games = [
    {
      id: 1,
      title: 'Multiple Choice Quiz',
      description: 'Test your knowledge with multiple choice questions',
      difficulty: 'Easy',
      duration: '10 min',
      category: 'Mathematics',
      icon: '🔢',
      color: 'from-blue-500 to-cyan-500',
      component: <MultipleChoiceQuiz grade={grade} />,
    },
    {
      id: 2,
      title: 'True/False Quiz',
      description: 'Decide if the statements are true or false',
      difficulty: 'Easy',
      duration: '8 min',
      category: 'Science',
      icon: '🧪',
      color: 'from-green-500 to-emerald-500',
      component: <TrueFalseQuiz grade={grade} />,
    },
    {
      id: 3,
      title: 'Fill in the Blanks',
      description: 'Complete the sentences with the correct words',
      difficulty: 'Medium',
      duration: '12 min',
      category: 'Language',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
      component: <FillInTheBlanksQuiz grade={grade} />,
    },
    {
      id: 4,
      title: 'Match the Following',
      description: 'Match items from two columns',
      difficulty: 'Medium',
      duration: '10 min',
      category: 'History',
      icon: '🏛️',
      color: 'from-orange-500 to-red-500',
      component: <MatchTheFollowing grade={grade} />,
    },
    {
      id: 5,
      title: 'Crossword Puzzle',
      description: 'Solve the crossword using clues',
      difficulty: 'Medium',
      duration: '15 min',
      category: 'Geography',
      icon: '🌍',
      color: 'from-teal-500 to-blue-500',
      component: <CrosswordPuzzle grade={grade} />,
    },
    {
      id: 6,
      title: 'Sudoku Puzzle',
      description: 'Fill the grid with numbers',
      difficulty: 'Hard',
      duration: '20 min',
      category: 'Logic',
      icon: '🧩',
      color: 'from-indigo-500 to-purple-500',
      component: <SudokuPuzzle grade={grade} />,
    },
    {
      id: 7,
      title: 'Word Search',
      description: 'Find hidden words in the grid',
      difficulty: 'Medium',
      duration: '15 min',
      category: 'Vocabulary',
      icon: '🔤',
      color: 'from-pink-500 to-yellow-500',
      component: <WordSearchPuzzle grade={grade} />,
    },
    {
      id: 8,
      title: 'Jigsaw Puzzle',
      description: 'Arrange pieces to complete the picture',
      difficulty: 'Easy',
      duration: '10 min',
      category: 'Puzzle',
      icon: '🧩',
      color: 'from-yellow-400 to-orange-500',
      component: <JigsawPuzzle grade={grade} />,
    },
  ];

  const handleGameClick = (game: typeof games[0]) => {
    setActiveGame(game.title);
  };

  // Render the selected game component
  const activeGameObj = games.find(g => g.title === activeGame);
  if (activeGameObj) {
    return (
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
        <button
          className="mb-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          onClick={() => setActiveGame(null)}
        >
          ← Back to Game Grid
        </button>
        {activeGameObj.component}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {games.map((game) => (
        <motion.div
          key={game.id}
          whileHover={{ scale: 1.05 }}
          className={`bg-gradient-to-br ${game.color} rounded-xl shadow-lg p-6 flex flex-col items-center cursor-pointer transition-all`}
          onClick={() => handleGameClick(game)}
        >
          <div className="text-5xl mb-2">{game.icon}</div>
          <h3 className="text-xl font-bold mb-1">{game.title}</h3>
          <p className="text-sm mb-2 text-center">{game.description}</p>
          <div className="flex items-center space-x-2 text-xs text-gray-100">
            <span className="flex items-center"><Star className="w-4 h-4 mr-1" />{game.difficulty}</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />{game.duration}</span>
            <span className="flex items-center"><Target className="w-4 h-4 mr-1" />{game.category}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default GameGrid; 