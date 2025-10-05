import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGameState } from "@/hooks/useGameState";
import { tests } from "@/data/tests";
import LevelUpModal from "@/components/LevelUpModal";
import { toast } from "sonner";

const TestPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { completeTest } = useGameState();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);
  const [levelUpData, setLevelUpData] = useState({ level: 1, coinsEarned: 0 });

  const test = tests.find((t) => t.id === Number(id));

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Тест не найден</p>
      </div>
    );
  }

  const currentQ = test.questions[currentQuestion];
  const isLastQuestion = currentQuestion === test.questions.length - 1;

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);

    if (isLastQuestion) {
      setShowResults(true);
      const correctCount = newAnswers.filter(
        (answer, idx) => answer === test.questions[idx].correctAnswer
      ).length;

      const allCorrect = correctCount === test.questions.length;
      const result = completeTest(test.id, allCorrect);

      toast.success(
        `Тест завершен! Правильных ответов: ${correctCount}/${test.questions.length}`
      );

      if (result.leveledUp) {
        setLevelUpData({
          level: result.newLevel,
          coinsEarned: result.coinsEarned,
        });
        setShowLevelUp(true);
      }
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  const correctCount = answers.filter(
    (answer, idx) => answer === test.questions[idx].correctAnswer
  ).length;

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5 flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-card rounded-3xl p-8 shadow-xl border border-border text-center animate-scale-in">
          <div className="text-8xl mb-6">
            {correctCount === test.questions.length ? "🎉" : "💪"}
          </div>
          <h2 className="text-4xl font-bold mb-4">
            {correctCount === test.questions.length ? "Отлично!" : "Хорошая попытка!"}
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Правильных ответов: {correctCount} из {test.questions.length}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex-1 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl font-bold hover:scale-105 transition-transform"
            >
              Вернуться к урокам
            </button>
          </div>
        </div>

        <LevelUpModal
          isOpen={showLevelUp}
          onClose={() => {
            setShowLevelUp(false);
            navigate("/dashboard");
          }}
          level={levelUpData.level}
          coinsEarned={levelUpData.coinsEarned}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 px-4 py-2 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
        >
          ← Назад
        </button>

        <div className="bg-card rounded-3xl p-8 shadow-xl border border-border animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">{test.title}</h1>
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              {currentQuestion + 1} / {test.questions.length}
            </span>
          </div>

          <div className="mb-8">
            <div className="w-full bg-muted rounded-full h-2 mb-4">
              <div
                className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
                style={{
                  width: `${((currentQuestion + 1) / test.questions.length) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">{currentQ.question}</h2>
            <div className="space-y-4">
              {currentQ.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedAnswer(idx)}
                  className={`
                    w-full p-4 rounded-xl text-left transition-all duration-200
                    ${
                      selectedAnswer === idx
                        ? "bg-primary text-primary-foreground border-2 border-primary scale-105"
                        : "bg-muted hover:bg-muted/80 border-2 border-transparent hover:border-primary/30"
                    }
                  `}
                >
                  <span className="font-medium">{option}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className={`
              w-full py-4 rounded-2xl font-bold text-xl transition-all
              ${
                selectedAnswer !== null
                  ? "bg-gradient-to-r from-primary to-secondary text-white hover:scale-105"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }
            `}
          >
            {isLastQuestion ? "Завершить тест" : "Следующий вопрос →"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
