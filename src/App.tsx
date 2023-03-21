import { useEffect, useMemo, useRef, useState } from 'react';

import './App.css';
import Square from './components/Square';
import { useAppPresenter } from './useApp.presenter';

function App() {
  const { crossClassName, disabled, onClickHandler, onReset, winner, square } =
    useAppPresenter();

  return (
    <div className='App'>
      <div className={`winner ${winner ? 'winner_active' : 'winner_hidden'}`}>
        Winner is: {winner}
      </div>
      <div className={`board_wrapper ${crossClassName}`}>
        {square.map((item, index) => (
          <Square
            key={index}
            value={item}
            onClickHandler={() => onClickHandler(index)}
            disabled={disabled}
          />
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
