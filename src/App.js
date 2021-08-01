import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import VideoPlayer from './components/VideoPlayer'
import ReccomendedVideos from './components/ReccomendedVideos.js'
import VideoInfo from './components/VideoInfo.js'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <VideoPlayer/>
        <VideoInfo/>
      </div>
      <div>
        <ReccomendedVideos/>
      </div>
    </div>
  );
}

export default App;
