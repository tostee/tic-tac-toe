import Square from './Square';
export const WinnerModal = ({ winner, resetGame }) => {
  return (
    <section className="winner">
      <div className="text">
        <h2>{winner === false ? 'Draw' : 'Win'}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Start Again</button>
        </footer>
      </div>
    </section>
  );
};
