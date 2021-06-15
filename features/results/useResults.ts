import { useAppSelector } from '../../app/hooks';

function getGameScore(accuracy: number, difficulty: number, clearTime: number) {
  const score = accuracy * 10 + difficulty * 5 - clearTime * 2;
  return score;
}

function getLevelInfo(total: number) {
  let upBy = 0;
  let remaining = total;
  // You need 1000 score to get to level 2
  if (total < 1000) {
    remaining = 1000 - total;
  } else {
    // TODO: rewrite to make it easier to understand
    let toNext = 1000 * 1.2 ** upBy;
    while (remaining > toNext) {
      remaining = remaining - toNext;
      upBy++;
    }
  }

  const scoreToNextLevel = remaining;
  const isUp = upBy > 0;

  return { scoreToNextLevel, upBy, isUp };
}

export function useResults() {
  const { clearTime, life, currentQuestions, level } = useAppSelector(
    (state) => {
      const { tables, selectedQuestionLookups, life, clearTime, level } =
        state.gameplay;

      const currentQuestions = selectedQuestionLookups.map((lookup) => {
        const { byIndex, tableIndex } = lookup;
        return tables[tableIndex][byIndex];
      });
      return {
        clearTime,
        life,
        currentQuestions,
        level,
      };
    }
  );
  const correct = life + 3;
  const missed = 5 - life;
  const accuracy = Math.round((correct * 100) / 8);
  const difficulty = currentQuestions.reduce((difficulty, question) => {
    return difficulty + question.difficulty;
  }, 0);
  const total = getGameScore(accuracy, difficulty, clearTime);
  const { scoreToNextLevel, upBy, isUp } = getLevelInfo(total);
  const levelAfterClear = level + upBy;

  return {
    clearTime,
    correct,
    missed,
    accuracy,
    difficulty,
    total,
    nextLevel: scoreToNextLevel,
    levelAfterClear,
    levelUpBy: upBy,
    isUp,
  };
}
