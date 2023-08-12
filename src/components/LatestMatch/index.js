// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfFheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatch

  return (
    <li className="latest-match-container-x">
      <div className="left-img-container">
        <div className="left-side-text-container">
          <p className="com-team-heading">{competingTeam}</p>
          <p className="date">{date}</p>
          <p className="venue">{venue}</p>
          <p className="result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="com-team-logo"
        />
      </div>
      <hr className="horizontal-line" />
      <div className="right-side-text-container">
        <p className="innings">First Innings</p>
        <p className="inning-class">{firstInnings}</p>
        <p className="innings">Second Innings</p>
        <p className="inning-class">{secondInnings}</p>
        <p className="innings">Man Of The Match</p>
        <p className="inning-class">{manOfFheMatch}</p>
        <p className="innings">Umpire</p>
        <p className="inning-class">{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
