import Confetti from "react-confetti";

const Colours: React.FC = () => {
  const happy = () => {
    const happy = document.getElementById("happy");
    happy?.classList.toggle("change");
    setTimeout(() => {
      happy?.classList.toggle("change");
    }, 2000);
  };

  const sad = () => {
    const sad = document.getElementById("sad-rain");
    sad?.classList.toggle("change");
    setTimeout(() => {
      sad?.classList.toggle("change");
    }, 2000);
  };

  const angry = () => {
    const angry = document.getElementById("angry-fire");
    const colours = document.getElementById("colours");
    angry?.classList.toggle("change");
    colours?.classList.toggle("change");
    setTimeout(() => {
      colours?.classList.toggle("change");
      angry?.classList.toggle("change");
    }, 2000);
  };

  const disgust = () => {
    const disgust = document.getElementById("app");
    disgust?.classList.toggle("change-disgust");
    setTimeout(() => {
      disgust?.classList.toggle("change-disgust");
    }, 2000);
  };

  const scared = () => {
    const scared = document.getElementById("app");
    scared?.classList.toggle("change-scared");
    setTimeout(() => {
      scared?.classList.toggle("change-scared");
    }, 2000);
  };

  const excited = () => {
    const excited = document.getElementById("app");
    excited?.classList.toggle("change-excited");
    setTimeout(() => {
      excited?.classList.toggle("change-excited");
    }, 2000);
  };

  return (
    <section className="colours" id="colours">
      <Confetti className="confetti" id="happy" numberOfPieces={300} />
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle one" />
      </svg>
      <p className="emotion" onClick={happy}>
        Happy
      </p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle two" />
      </svg>

      <p className="emotion" id="sad" onClick={sad}>
        Sad
      </p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle three" />
      </svg>
      <p className="emotion" id="disgust" onClick={disgust}>
        Disgusted
      </p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle four" />
      </svg>
      <p className="emotion" id="angry-fire" onClick={angry}>
        Angry
      </p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle five" />
      </svg>
      <p className="emotion" onClick={excited}>
        Excited
      </p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle six" />
      </svg>
      <p className="emotion" onClick={scared}>
        Scared
      </p>
    </section>
  );
};

export default Colours;
