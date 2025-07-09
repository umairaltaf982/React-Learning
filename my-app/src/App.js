import './App.css';
import Welcome from './pages/functionalComponents';
import { Thankyou, Hello, FriendList} from './pages/functionalComponents';
import {Counter, ProfileManagement, CarUpdation, ToggleTheme, ProfileStatus, ListRenderingDynamic} from './pages/useStates'
import Welcome1 from './pages/classComponentBasic';
import {Welcome2} from './pages/classComponentBasic';

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
    </>
  );
}

export default App;
