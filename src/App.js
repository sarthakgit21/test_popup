
import React, { useState, useEffect } from 'react';
import Popup from './Popup';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [idleTime, setIdleTime] = useState(0);


  const handleShowPopup = () => setShowPopup(true);

  // Function to hide the pop-up
  const handleClosePopup = () => setShowPopup(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        handleShowPopup();
      }
    };

    const handleMouseMovement = () => {
      setIdleTime(0);
    };

    const handleUserIdle = () => {
      setIdleTime((prevIdleTime) => prevIdleTime + 1);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMovement);

    const idleInterval = setInterval(handleUserIdle, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMovement);
      clearInterval(idleInterval);
    };
  }, []);

  useEffect(() => {
    if (idleTime > 1) {
      handleShowPopup();
    }
  }, [idleTime]);

  return (
    <div className="App">
      <h1>Welcome to the React Pop-up Demo!</h1>
      {showPopup && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

export default App;
