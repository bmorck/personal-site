import './App.css';
import './fonts/muli.light.ttf';
import Fader from './components/Fader';
import IntroText from './components/IntroText';
import Typewriter from 'typewriter-effect'
function App() {
  return (
    <>
      <Fader text="Bobby Morck"></Fader>
      <IntroText/>
    </>
  );
}

export default App;
