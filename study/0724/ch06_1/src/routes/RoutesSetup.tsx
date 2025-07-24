import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Home from './Home'
import Board from '../pages/Board'
import Card from './Card'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="*" element={<NoMatch />} />
      <Route path="/" element={<Home />} />
      <Route path="/Welcome" element={<Home title="Welcome to our site" />} />
      <Route path="/board" element={<Board />} />
      <Route path="/board/card/:cardid" element={<Card />} />
    </Routes>
  )
}
