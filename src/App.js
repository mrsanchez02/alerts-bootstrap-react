import ButtonGroup from "./components/ButtonGroup";
import DisplayAlert from "./components/DisplayAlert";
import AlertState from "./context/alertState";

function App() {
  return (
    <AlertState>
      <div className="container">
        <DisplayAlert/>
        <h1 className="display-1">Alerts Showtime</h1>
        <hr/>
        <ButtonGroup/>
      </div>
    </AlertState>
  );
}

export default App;
