import Spring from './view/Spring'
import UseSpring from './view/UseSpring'
import ParallaxWorld from './view/ParallaxWorld';

// portfolio
import OpTrail from './view/Portfolio/OpTrail'
import OpSlide from './view/Portfolio/OpSlide'

function App() {
  return (
    <div className="App">
      {/* <Sample /> */}
      {/* <Spring /> */}
      {/* <UseSpring /> */}
      {/* <ParallaxWorld /> */}
      <div id='portfolio'>
        {/* <OpTrail /> */}
        <OpSlide />
      </div>
    </div>
  )
}

export default App;
