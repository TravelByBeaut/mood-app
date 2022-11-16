import Confetti from "react-confetti";

const Colours: React.FC = () => {
  const confetti = () => {
    const fire = document.getElementById("fire");
    fire?.classList.toggle("change");
  };

  return (
    <section className="colours">
      <Confetti className="confetti" id="fire" numberOfPieces={200} />
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle one" />
      </svg>
      <p className="emotion" onClick={confetti}>
        Happy
      </p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle two" />
      </svg>
      <p className="emotion">Sad</p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle three" />
      </svg>
      <p className="emotion">Disgusted</p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle four" />
      </svg>
      <p className="emotion">Angry</p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle five" />
      </svg>
      <p className="emotion">Excited</p>
      <svg height="60" width="60" className="svg-circle">
        <circle cx="50" cy="50" r="10" className="circle six" />
      </svg>
      <p className="emotion">Scared</p>
    </section>
  );
};

export default Colours;
