import JournalEntry from "./JournalEntry";

interface Props {
  mood: string;
  setMood: React.Dispatch<React.SetStateAction<string>>;
}

const MoodDiary: React.FC<Props> = ({ mood, setMood }) => {
  return (
    <>
      <header className="App-header">Journal</header>
      <JournalEntry mood={mood} setMood={setMood} />
    </>
  );
};

export default MoodDiary;
