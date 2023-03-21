interface SquareProps {
  value: string | null;
  onClickHandler: () => void;
  disabled: boolean;
}

const Square = ({ onClickHandler, value, disabled }: SquareProps) => {
  return (
    <button className='square' onClick={onClickHandler} disabled={disabled}>
      {value}
    </button>
  );
};

export default Square;
