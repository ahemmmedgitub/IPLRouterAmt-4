import {Route, Switch} from 'react-router-dom'

import Header from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={Header} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <NotFound component={NotFound} />
    </Switch>
  </>
)

export default App
