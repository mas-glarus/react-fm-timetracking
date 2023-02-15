import './App.css';
import UserInfo from './components/userInfo/userInfo';
import Work from './components/work/work';
import Play from './components/play/play';

function App() {
  return (
    <div className="App">
      <UserInfo />
      <Work/>
      <Play />
    </div>
  );
}

export default App;
