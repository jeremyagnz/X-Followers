import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'jeremyagnz',
    name: 'Jeremy Arias',
    isFollowing: true
  },
  {
    userName: 'cdn37',
    name: 'Canal De Noticias 37',
    isFollowing: false
  },
  {
    userName: 'LosDodgers',
    name: 'Los Dodgers',
    isFollowing: true
  },{
    userName: 'jeremyagnz',
    name: 'Jeremy Arias',
    isFollowing: true
  },
  {
    userName: 'cdn37',
    name: 'Canal De Noticias 37',
    isFollowing: false
  },
  {
    userName: 'LosDodgers',
    name: 'Los Dodgers',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}
