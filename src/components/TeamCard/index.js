// Write your code here
import {Link} from 'react-router-dom'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {id, name, teamImageUrl} = eachTeam

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-card-container">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
