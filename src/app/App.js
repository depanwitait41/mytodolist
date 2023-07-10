//import logo from './logo.svg';
import "./App.css";
import ListChart from "../components/list_chart/listChart";

function App() {
  return (
    <div className="grid place-items-center">
      <h1 className="text-center font-bold text-xl text-orange-700 m-2 p-2 border-content">
        -T O D O-
      </h1>
      <ListChart />
    </div>
  );
}

export default App;
