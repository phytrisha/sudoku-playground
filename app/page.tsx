import { getSudoku } from 'sudoku-gen';

// Get a sudoku of specific difficulty (easy, medium, hard, expert)
const sudoku = getSudoku('expert');

function stringToSudokuArray(sudokuString: string) {
  if (sudokuString.length !== 81) {
    throw new Error("Invalid Sudoku string length. Must be 81 characters.");
  }

  const sudokuArray = [];
  for (let i = 0; i < 9; i++) {
    const rowStart = i * 9;
    const rowEnd = rowStart + 9;
    const rowString = sudokuString.substring(rowStart, rowEnd);
    const rowArray = rowString.split(""); // Convert row string to array of characters
    sudokuArray.push(rowArray);
  }

  return sudokuArray;
}

export default function Home() {
  
  console.log(stringToSudokuArray(sudoku.puzzle))

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className='font-mono tracking-[1em]'>
          {stringToSudokuArray(sudoku.puzzle)[0]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[1]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[2]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[3]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[4]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[5]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[6]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[7]}
          <br />
          {stringToSudokuArray(sudoku.puzzle)[8]}
        </div>
      </main>
    </div>
  );
}
