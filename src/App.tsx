import Spring from './view/Spring'
import UseSpring from './view/UseSpring'
import ParallaxWorld from './view/ParallaxWorld';

// portfolio
import OpTrail from './view/Portfolio/OpTrail'
import OpSlide from './view/Portfolio/OpSlide'
import OpPopupLogo from './view/Portfolio/OpPopupLogo';
import OpRotateLogo from './view/Portfolio/OpRotateLogo';
import ParallaxTutorial from './view/ParallaxTutorial';
import ParallaxSmaple from './view/Portfolio/ParallaxSmaple';
import FadeIn from './view/Portfolio/FadeIn'
import ScrollLav from './view/Portfolio/ScrollLav';
import Setting from './view/Portfolio/Setting';

function App() {
  return (
    <div className="App">
      {/* <Sample /> */}
      {/* <Spring /> */}
      {/* <UseSpring /> */}
      {/* <ParallaxWorld /> */}
      <div id='portfolio'>
        {/* <ParallaxTutorial /> */}
        {/* <OpTrail /> */}
        {/* <OpSlide /> */}
        {/* <OpPopupLogo />  */}
        {/* <OpRotateLogo /> */}
        {/* <ParallaxSmaple /> */}
        <FadeIn />
        {/* <Setting /> */}
        {/* <ScrollLav /> */}
      </div>
    </div>
  )
}

export default App;
