import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useAuth } from './context';

import './App.scss';

function App() {
  const { currentUser, signInWithEmailAndPassword} = useAuth();  
  // eslint-disable-next-line react-hooks/exhaustive-deps

   useEffect(() => {
    
     const fetchData = async () => {
       await signInWithEmailAndPassword('Sahin,Cinar', 'pgmGent5858');
     }
     fetchData();

 }, []);

   useEffect(() => {
     console.log(currentUser);
   }, [currentUser]);

  return (
    <div className="app">  
      <Outlet />    
    </div>
  );
}

export default App;
