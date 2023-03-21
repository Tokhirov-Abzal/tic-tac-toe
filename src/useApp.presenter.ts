import { useRef, useState } from 'react';
import Game from './utils';

interface PresenterResult {
  winner: null | string;
  crossClassName: null | string;
  onClickHandler: (index: number) => void;
  disabled: boolean;
  onReset: () => void;
  square: null[] | string[];
}

export const useAppPresenter = (): PresenterResult => {
  const [square, setSquare] = useState<null[] | string[]>(Array(9).fill(null));
  const [xIsNext, setxIsNext] = useState(true);
  const winPatternRef = useRef<null | number[]>(null);

  const crossClassName =
    winPatternRef.current && `cross_${winPatternRef.current.join('')}`;

  const onClickHandler = (index: number) => {
    if (Game.calculateWinner(square)) return;
    if (square[index]) return;

    const newSquares = square.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquare(newSquares);
    setxIsNext((prev) => !prev);
  };

  const winner = Game.calculateWinner(square);

  if (winner) {
    winPatternRef.current = Game.getWinPattern();
  }

  const disabled = Boolean(winner);

  const onReset = () => {
    setSquare(Array(9).fill(null));
    setxIsNext(true);
    winPatternRef.current = null;
  };

  return {
    winner,
    crossClassName,
    onClickHandler,
    disabled,
    onReset,
    square,
  };
};
