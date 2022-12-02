import './App.css';
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <h1 style={{margin:'20px'}}>Our Users</h1>
      <UserList/>

      </header>
    </div>
  );
}

export default App;
