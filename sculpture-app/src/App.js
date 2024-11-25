import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Theme from './components/Theme';
import List from './components/List';

function App() {
    return (
        <div className="App">
            <h1>Sculpture App</h1>
            <Theme/>
            <List/>
        </div>
    );
}

export default App;
