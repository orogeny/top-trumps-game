import RoundTrackerPip from "./RoundTrackerPip/RoundTrackerPip";
import { RoundState } from "./RoundTracker.types";

interface RoundTrackerProps {
  currentRound: number;
  rounds: RoundState[];
}

const RoundTracker: React.FC<RoundTrackerProps> = ({
  currentRound,
  rounds,
}) => {
  return (
    <>
      <span>Rounds:{currentRound}</span>
      <div>
        {rounds.map((round, i) => (
          <RoundTrackerPip
            isCurrentRound={i + 1 === currentRound}
            roundState={round}
          />
        ))}
      </div>
    </>
  );
};

export default RoundTracker;
