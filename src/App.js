import Cards from './Components/Cards/Cards';
import ComplatedCard from './Components/ComplatedCard/ComplatedCard';
import { FormState } from './Hook/Hooks';
import './Style/App.css'

function App() {
  const { status } = FormState()
                console.log(status)

  return (
    <div className="App">
      {status === false ? <Cards /> : <ComplatedCard />}
    </div>
  );
}

export default App;
