import { type NextPage } from "next";
import { useCallback, useState } from "react";

const DEFAULT_GOALS = [
  {
    label: 'Comer 4 refeições da dieta',
    done: false,
  },
  {
    label: 'Treino de musculação - 50min',
    done: false,
  },
  {
    label: 'Ingerir suplementos e manipulados',
    done: false,
  },
  {
    label: 'Treino aeróbico 1h - bicicleta',
    done: false,
  },
  {
    label: 'Dormir cedo - 8h diárias',
    done: false,
  },
];

const GoalsPage: NextPage = () => {
  const [goals, setGoals] = useState(DEFAULT_GOALS);

  const toggleGoalDone = useCallback((goalIndex: number) => {
    const newGoals = goals.map((goal, index) => {
      if(index === goalIndex) {
        return {...goal, done: !goal.done}
      }

       return goal;
    });

    setGoals(newGoals);
  }, [goals])

    return (
      <>
        <main className="w-full px-4 flex flex-col gap-2 pt-14">
          <h1 className="text-4xl text-gray-900 mb-8">Objetivos</h1>

          {goals.map((goal, index) => (
            <button 
              onClick={() => toggleGoalDone(index)}
              type="button"
              className={
                `uppercase py-4 w-full border-2 border-gray-900 rounded-md text-xs
                ${goal.done && 'bg-gray-900 text-white'}
                `
              }>
              {goal.label}
            </button>
          ))}
        </main>
      </>
    )
}

export default GoalsPage;