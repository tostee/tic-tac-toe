export const Title = ({ resetGame }) => {
  return (
    <>
      <h1>Hello Tic-tac-toe</h1>
      <button onClick={resetGame}>Reset Game</button>
    </>
  );
};
