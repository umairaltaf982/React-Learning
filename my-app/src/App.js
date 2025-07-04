import './App.css';
import Welcome from './pages/functionalComponents';
import { Thankyou, Hello} from './pages/functionalComponents';
import {Counter, ProfileManagement, CarUpdation, ToggleTheme, ProfileStatus} from './pages/useStates'

function App() {
  return (
    <>
      {/* Practicing Functional Components */}
      <h1>Functional Components</h1>
      <Welcome name = "Ali"/>
      <Thankyou />
      <Hello name = "Umair"/>
      <hr></hr>

      {/* Practicing UseStates */}
      <h1>Functional Components</h1>
      <Counter />
      <ProfileManagement />
      <CarUpdation />
      <ToggleTheme />
      <ProfileStatus />
    </>
  );
}

export default App;
