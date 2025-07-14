import './App.css';
import Welcome from './pages/functionalComponents';
import { Thankyou, Hello, FriendList} from './pages/functionalComponents';
import {Counter, ProfileManagement, CarUpdation, ToggleTheme, ProfileStatus, ListRenderingDynamic} from './pages/useStates'
import Welcome1 from './pages/classComponentBasic';
import {Welcome2} from './pages/classComponentBasic';
import Counter1 from './pages/ClassComponentState';
import Greeting from './pages/ClassComponentEvent';
import LifecycleIntro from './pages/LifecycleIntro';
import Intro from './pages/JSXIntro';
import VirtualDomDemo from './pages/VirtualDomDemo';
import StateFullExample from './pages/StateFullExample';
import PropsVsStateExample from './pages/PropsVsStateExample';
import PureComponentDemo from './pages/PureComponentDemo';
import UseEffect from './pages/UseEffect'


function App() {
  return (
    <>
      {/* Practicing Functional Components */}
      <h1>Functional Components</h1>
      <Welcome name = "Ali"/>
      <Thankyou />
      <Hello name = "Umair"/>
      {/* List Rendering using Maps */}
      <FriendList />
      <ListRenderingDynamic/>
      <hr></hr>




      {/* Practicing UseStates */}
      <h1>Use States</h1>
      <Counter />
      <ProfileManagement />
      <CarUpdation />
      <ToggleTheme />
      <ProfileStatus />
      <hr></hr>




      {/* Class Components */}
      <h1>Class Components</h1>
      <Welcome1/>
      <Welcome2 name="Ali Salah" />
      <Counter1 />
      <Greeting />
      <LifecycleIntro />
      <hr></hr>



      {/* JSX and Virtual DOM */}
      <h1>JSX and Virtual DOM</h1>
      <Intro />
      <VirtualDomDemo />
      <hr></hr>



      {/* Component Lifecycle Methods (Mounting & Re-rendering) */}
      <h1>Component Lifecycle Methods (Mounting & Re-rendering)</h1>
      <Intro />
      <hr></hr>



      {/* State in Class Components */}
      <h1>State in Class Components</h1>
      <StateFullExample />
      <hr></hr>




      {/* Props vs State in React */}
      <h1>Props vs State in React</h1>
      <PropsVsStateExample />
      <hr></hr>




      {/* PureComponent in React */}
      <h1>PureComponent in React</h1>
      <PureComponentDemo />
      <hr></hr>




       {/* PureComponent in React */}
      <h1>useEffect in React</h1>
      <UseEffect />
      <hr></hr>
    </>
  );
}

export default App;
