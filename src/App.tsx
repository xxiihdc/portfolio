import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const badgesData = [
    { text: 'New', color: 'bg-red' },
    { text: 'Sale'},
  ];



  return (
    <div className="App">
      <div className="container-fluid">
        <Header/>
        <Card badges={badgesData} />
      </div>
    </div>
  );
}

export default App;
