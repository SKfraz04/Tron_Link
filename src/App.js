import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import BasicNav from './Component/UI/Navbar';
import HomePage from './Component/Pages/HomePage';

function App() {
  return (
    <div className="App">
      <BasicNav />
      <HomePage />
    </div>
  );
}

export default App;
