import { useState } from "react";

interface Props {
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
}
const JournalEntry: React.FC<Props> = ({ mood, setMood }) => {
  const [event, setEvent] = useState<string>("");
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

  return (
    <>
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
          className="entry-box"
          onChange={(event) => {
            setEvent(event.target.value);
          }}
        />
      </form>
      <section className="entry-entered">
        <p>I am feeling {mood}</p>
        <p>because</p>
        <p>I was {event}</p>
      </section>
      <form>
        <button type="submit" className="entry-submit">
          Enter
        </button>
      </form>
    </>
  );
};

export default JournalEntry;
