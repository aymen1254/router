import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Proudit } from './Compents/Data';
import Description from './Compents/Description';
import ModelList from './Compents/ModelList';

function App() {
  const [tlemdha, setTlemdha] = useState(Proudit)
  return (
    <div className="App">
      
     <BrowserRouter>
     <switch>
       <Route path='/' component={ModelList} />
       <Route path='/student/:id' render={(props=>
        <Description  Proudit={tlemdha} {...props} /> 
        )} />

      
     </switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
