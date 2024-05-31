import './reset.css';
import './App.css';
import { useState } from 'react';
import TagWords from './components/TagWords';


function App() {
  const [openModal, setOpenModal] = useState(true);

  const playGame = () => {
    setOpenModal(!openModal);
  }

  return (
    <div className='App'>
      <button 
        className='openTagWords'
        onClick={playGame}
      />
      <TagWords 
        open={openModal}
      />
    </div>
  )
}

export default App;
