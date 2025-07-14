import './App.css';
import Welcome from './pages/functionalComponents';
import { Thankyou, Hello, FriendList} from './pages/functionalComponents';
import {Counter, ProfileManagement, CarUpdation, ToggleTheme, ProfileStatus, ListRenderingDynamic} from './pages/useStates';
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
import UseEffect from './pages/UseEffect';
import RefExample from './pages/RefExamples';
import ForwardRefExample from './pages/ForwardRefExample';
import PreviousValue from './pages/PreviousValue';
import { EnhancedClickCounter, EnhancedHoverCounter } from './pages/WithCounterHOC';
import ThemeProvider from './pages/ThemeProvider';
import ThemedButton from './pages/ThemedButton';
import ParentComponent from './pages/ParentComponent';
import ControlledCompExample from './pages/ControlledCompExample';
import UncontrolledCompExample from './pages/UncontrolledCompExample';
import LiftingStateUp from './pages/LiftingStateUp/LiftingStateUp';


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



      {/* useRef and Forward Ref in React */}
      <h1>useRef in React</h1>
      <RefExample />
      <ForwardRefExample />
      <PreviousValue />
      <hr></hr>



      {/* Higher Order Components (HOC) in React */}
      <h1>Higher Order Components (HOC) in React</h1>
      <EnhancedClickCounter />
      <EnhancedHoverCounter />
      <hr></hr>



    {/* Context API */}
    <ThemeProvider>
      <div style={{ padding: "2rem" }}>
        <h2>🌗 Theme Toggle with Context API</h2>
        <ThemedButton />
      </div>
    </ThemeProvider>
    <hr></hr>




    {/* React.memo */}
    <h1>Parent Component</h1>
    <ParentComponent />
    <hr></hr>

    {/* Controlled and Uncontrolled Components */}
    <h1>Controlled and Uncontrolled Components</h1>
    <ControlledCompExample />
    <UncontrolledCompExample />
    <hr></hr>



    {/* Lifting State Up */}
    <LiftingStateUp />
    <hr></hr>

    </>
  );
}

export default App;
