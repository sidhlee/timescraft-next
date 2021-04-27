import { createSlice } from '@reduxjs/toolkit';

// 2, 3, 4, 5, 6, 7, 8, 9
const difficultyArrays = [
  [1, 2, 2, 3, 4, 5, 6, 7], // 2
  [1, 2, 4, 5, 7, 12, 11, 13], // 3
  [2, 5, 7, 6, 11, 12, 13, 14], // 4
  [3, 4, 5, 7, 6, 9, 8, 10], // 5
  [4, 5, 8, 7, 8, 9, 12, 18], // 6
  [9, 11, 12, 13, 10, 15, 16, 17], // 7
  [6, 11, 12, 13, 14, 17, 18, 19], // 8
  [15, 19, 20, 21, 22, 25, 24, 23], // 9
];

type Question = {
  table: number;
  by: number;
  difficulty: number;
  tried: number;
  correct: number;
  lastTried: Date | null;
  lastCorrect: Date | null;
};

/**
 * Returns an array of tables
 * @param {number[][]} difficultyArrays - 2D array of difficulties
 */
function getTables(difficultyArrays: number[][], maxTable = 9) {
  const tables = [];
  for (let table = 2; table <= maxTable; table++) {
    const questions = [];
    for (let by = 2; by <= maxTable; by++) {
      const tableIndex = table - 2;
      const byIndex = by - 2;
      const question: Question = {
        table,
        by,
        difficulty: difficultyArrays[tableIndex][byIndex],
        tried: 0,
        correct: 0,
        lastTried: null, // use Date.getTime()
        lastCorrect: null,
      };

      questions.push(question);
    }

    tables.push(questions);
  }

  return tables;
}

const TABLES = getTables(difficultyArrays);

const initialState = {
  tables: TABLES,
  currentIndex: 0,
  currentTable: 2,
  currentQuestions: TABLES[0],
  life: 5,
  clearTime: 0,
  remainingTime: 9,
  score: 0,
  level: 1,
  isMenuOpen: false,
};

export const gameplaySlice = createSlice({
  name: 'gameplay',
  initialState,
  reducers: {},
});
