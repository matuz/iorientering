import "./styles.css";
import Taile from "./Taile";

export default function App() {
  return (
    <div className="App">
      {points.map(point => <Taile points={point} />)}
    </div>
  );
}
