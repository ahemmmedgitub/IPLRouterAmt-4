// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LatestMatch from '../LatestMatch'
import TeamCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    latestMatch: {},
    matchCard: [],
    teamUrl: '',
    teamId: '',
    loader: true,
  }

  componentDidMount() {
    this.getEachTeamMatchDetail()
  }

  getEachTeamMatchDetail = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedLatestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfFheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }

    const recentMatches = data.recent_matches.map(eachMatch => ({
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeam: eachMatch.competing_team,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))

    const teamBannerUrl = data.team_banner_url

    this.setState({
      teamUrl: teamBannerUrl,
      latestMatch: updatedLatestMatchDetails,
      matchCard: recentMatches,
      teamId: id,
      loader: false,
    })
  }

  render() {
    const {teamId, teamUrl, latestMatch, matchCard, loader} = this.state

    const testId = loader ? 'loader' : ''
    console.log(loader)

    return (
      <div className={`team-matches-container ${teamId}`}>
        {loader ? (
          <div data-testid={testId}>
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamUrl} alt="team banner" className="team-banner" />
            <div className="heading-container">
              <p className="latest-matches">Latest Matches</p>
            </div>
            <ul className="latest-match-container">
              <LatestMatch latestMatch={latestMatch} key={latestMatch.id} />
            </ul>
            <ul className="match-card-container">
              {matchCard.map(eachCard => (
                <TeamCard eachCard={eachCard} key={eachCard.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
