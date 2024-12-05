import { useState, useCallback } from 'react';
import { GameState } from '@/types';

export function useGame() {
  const [gameState, setGameState] = useState<GameState>({
    isPlaying: false,
    targetNumber: 0,
    attempts: 0,
    maxAttempts: 5
  });

  const startGame = useCallback(() => {
    setGameState({
      isPlaying: true,
      targetNumber: Math.floor(Math.random() * 100) + 1,
      attempts: 0,
      maxAttempts: 5
    });
    return [
      "Welcome to Guess the Number!",
      "I'm thinking of a number between 1 and 100.",
      "You have 5 attempts to guess it.",
      "Type a number to start guessing..."
    ];
  }, []);

  const makeGuess = useCallback((guess: number): [string[], boolean] => {
    if (!gameState.isPlaying) {
      return [["Game is not active. Type 'game' to start a new game."], false];
    }

    const newAttempts = gameState.attempts + 1;
    setGameState(prev => ({ ...prev, attempts: newAttempts }));

    if (isNaN(guess)) {
      return [["Please enter a valid number."], false];
    }

    if (guess === gameState.targetNumber) {
      setGameState(prev => ({ ...prev, isPlaying: false }));
      return [[`Congratulations! You guessed it in ${newAttempts} attempts!`], true];
    }

    if (newAttempts >= gameState.maxAttempts) {
      setGameState(prev => ({ ...prev, isPlaying: false }));
      return [[
        `Game Over! You've used all ${gameState.maxAttempts} attempts.`,
        `The number was ${gameState.targetNumber}.`,
        "Type 'game' to play again!"
      ], true];
    }

    const hint = guess < gameState.targetNumber ? "higher" : "lower";
    return [[
      `Wrong! The number is ${hint}.`,
      `Attempts remaining: ${gameState.maxAttempts - newAttempts}`
    ], false];
  }, [gameState]);

  const isValidGuess = useCallback((input: string): boolean => {
    return gameState.isPlaying && !isNaN(Number(input));
  }, [gameState.isPlaying]);

  return {
    gameState,
    startGame,
    makeGuess,
    isValidGuess
  };
}