import react from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import text from '../pages/text.js';
import Home from '../pages/home.js';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/text" component={text} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import logo from '../src/lib/yin-yang.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Texto
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
