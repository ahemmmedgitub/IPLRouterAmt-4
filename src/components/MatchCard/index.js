// Write your code here
import './index.css'

const TeamCard = props => {
  const {eachCard} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = eachCard

  return (
    <div className="team-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="team-logo"
      />
      <p className="heading">{competingTeam}</p>
      <p className="team-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </div>
  )
}
export default TeamCard
