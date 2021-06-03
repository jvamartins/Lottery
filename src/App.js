import "./App.css";
import Lottery from "./Lottery/Lottery";
function App() {
  return (
    <div className="App">
      <Lottery title="Lottery" numBalls={10} maxValue={40} />
    </div>
  );
}

export default App;
