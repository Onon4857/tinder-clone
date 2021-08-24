import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';


function App() {
  return (
    <div className="App">
     
 
        {/*Header*/}
          <Header />

        {/*Card*/}
          <TinderCards />

        {/*Button*/}
          <SwipeButtons />



    </div>
  );
}

export default App;
