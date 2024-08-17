import Player from './components/Player.jsx';
import ChallengeTimer from "./components/ChallengeTimer.jsx";


function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <ChallengeTimer title={"Easy"} targetTime={1} />
        <ChallengeTimer title={"Not Easy"} targetTime={5} />
        <ChallengeTimer title={"Getting Tough"} targetTime={10} />
        <ChallengeTimer title={"Pros"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
