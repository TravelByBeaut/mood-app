import { useState } from "react";

interface Props {
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
}
const JournalEntry: React.FC<Props> = ({ mood, setMood }) => {
  const [event, setEvent] = useState<string>("");
  const [sleep, setSleep] = useState<number>(0);
  const [exercise, setExercise] = useState<string>("");
  const [gratitude, setGratitude] = useState<string>("");
  const options = [
    {
      label: "-----",
    },
    {
      label: "happy",
    },
    {
      label: "angry",
    },
    {
      label: "sad",
    },
    {
      label: "scared",
    },
    {
      label: "excited",
    },
    {
      label: "disgusted",
    },
  ];

  const handleSleep = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    num: number
  ) => {
    if (sleep >= 0 && sleep < 24) {
      setSleep((currCount) => currCount + num);
    } else {
      setSleep(0);
    }
  };

  return (
    <section className="entry-container">
      <form className="entry">
        <p className="dropdown-text">How are you feeling?</p>
        <select
          value={mood}
          className="dropdown"
          onChange={(event) => {
            setMood(event.target.value);
          }}
        >
          {options.map((option) => (
            <option
              key={option.label}
              value={option.label}
              className="dropdown"
            >
              {option.label}
            </option>
          ))}
        </select>
      </form>
      <form>
        <input
          value={event}
          type="input"
          placeholder="What were you doing?"
          className="activity-entry"
          onChange={(event) => {
            setEvent(event.target.value);
          }}
        />
        <p className="dropdown-text">How many hours of sleep did you get?</p>
        <button
          type="button"
          className="down"
          onClick={(event) => {
            handleSleep(event, -1);
          }}
        >
          -
        </button>
        <input
          className="sleep-entry"
          type="number"
          min="0"
          max="24"
          value={sleep}
          onChange={(event) => {
            setSleep(event.target.valueAsNumber);
          }}
        />
        <button
          type="button"
          className="up"
          onClick={(event) => {
            handleSleep(event, 1);
          }}
        >
          +
        </button>
        <p className="dropdown-text">How much exercise have you done today?</p>
        <select
          value={exercise}
          className="dropdown"
          onChange={(event) => {
            setExercise(event.target.value);
          }}
        >
          <option>-----</option>
          <option>less than 30 mins</option>
          <option>30 mins-1 hour</option>
          <option>1-2 hours</option>
          <option>2-3 hours</option>
          <option>more than 3 hours</option>
        </select>
        <p className="dropdown-text">Gratitude entry: 1-3 items</p>
        <textarea
          value={gratitude}
          placeholder="I am grateful for..."
          className="gratitude-entry"
          onChange={(event) => {
            setGratitude(event.target.value);
          }}
        />
        <section className="entry-entered">
          <section className="entry-centered">
            <p>I am feeling {mood}</p>
            <p>because</p>
            <p>I was {event}.</p>
            <p>
              I got {sleep} {sleep === 1 ? "hour" : "hours"} of sleep.
            </p>
            <p>I did {exercise} of exercise.</p>
            <p>I am grateful for {gratitude}</p>
          </section>
        </section>
        <button type="submit" className="entry-submit">
          Enter
        </button>
      </form>
    </section>
  );
};

export default JournalEntry;
