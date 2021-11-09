
import './App.css';
import avatar from './images/reza.jpg'
import twitch from './images/twitch.png'
import spidermanIcon from './images/spiderman.png'
import sackboyIcon from './images/sackboy.png'
import assassinsIcon from './images/assassins.png'
import game from './images/game.png'
import steam from './images/steam.png'
import library from './images/library.png'
import Card from './Components/Card';
function App() {

  const users =[
    {
      name:'assassins', 
      avatar : assassinsIcon ,
      dis:'َAssassins Creed Valhala',
      value_bar : 50
    },
    {
      name:'spiderman', 
      avatar : spidermanIcon ,
      dis:'َSpiderman Game Valhala',
      value_bar : 65
    },    
    {
      name:'sackboy', 
      avatar : sackboyIcon ,
      dis:'Sackboy Game Valhala',
      value_bar : 73
    }

  ]



  return (
    <div className="App">
      <div className='circle1'></div>
      <div className='circle2'></div>
      <div className='box'>
        <div className='dashboard'>
            <div className='user'>
                <img className='user-avatar' src={avatar} width ='60px' height='60px'></img>
                <h3 className='user-name'>Reza Soleymani</h3>
                <h3 className='user-dis'>Developer</h3>
            </div>

            <ul>
              <li>
                <img src={twitch} width='20px' height='20px' alt=''></img>
                <h2>Streams</h2>
              </li>
              <li>
                <img src={game} width='20px' height='20px' alt=''></img>
                <h2>New</h2>
              </li>
              <li>
                <img src={steam} width='20px' height='20px' alt=''></img>
                <h2>Steam</h2>
              </li>
              <li>
                <img src={library} width='20px' height='20px' alt=''></img>
                <h2>Library</h2>
              </li>
            </ul>
        </div>
        <div className='game-bord'>
            <div className='header'>
              <h2>Active Games</h2>
              <div className='border'></div>
            </div>
            <div className='game-bord-cards'>
            <Card  avatar ={users[0].avatar} dis ={users[0].dis} name ={users[0].name} value_bar={users[0].value_bar} />
            <Card  avatar ={users[1].avatar} dis ={users[1].dis} name ={users[1].name} value_bar={users[1].value_bar} />
            <Card  avatar ={users[2].avatar} dis ={users[2].dis} name ={users[2].name} value_bar={users[2].value_bar} />

            </div>

        </div>

      </div>
    </div>
  );
}

export default App;
