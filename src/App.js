import React, { useState } from 'react'
import './App.css'

const phrases = [
  "No",
  "Are you sure?",
  "Really sure",
  "Please 😭",
  "Don't do this to me",
  "I'm gonna cry...",
  "You're breaking my heart 😭",
  "I'm asking for the last time",
  "Please say yes 😭",
]

const App = () => {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }


  return (
    <div className='valentine-container'>
      {yesPressed ? (
        <div className='yes-pressed'>
          <div class="tenor-gif-embed" data-postid="18274294" data-share-method="host" data-aspect-ratio="1.20755" data-width="100%"></div>
          <div className="text">Yayy!!!</div>
        </div>
      ) : (
        <div className='not-pressed'>
          <div class="tenor-gif-embed" data-postid="13498319440014303012" data-share-method="host" data-aspect-ratio="1" data-width="100%"></div>
          <div className='text'>
            Will you be my valentine?
          </div>
          <div className='button-wrapper'>
            <button className="yesButton" style={{ fontSize: yesButtonSize }} onClick={() => setYesPressed(true)}>
              Yes
            </button>
            <button className="noButton" onClick={handleNoClick}>
              {getNoButtonText()}
            </button>
          </div>
        </div>



      )}
    </div>
  )
}

export default App
