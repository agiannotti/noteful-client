import { Link } from 'react-router-dom';
import './App.css';
import NotefulApp from './NotefulApp/NotefulApp';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>
          <Link to={`/`}></Link>
        </h1>
      </header>
      <main>
        <NotefulApp />
      </main>
    </div>
  );
}

export default App;
