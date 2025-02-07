'use client';

import { getSudoku } from 'sudoku-gen';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import React from 'react'; // Import React!

interface Sudoku {
  puzzle: string;
  solution: string;
}

// Get a sudoku of specific difficulty (easy, medium, hard, expert)

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
  const [sudoku, setSudoku] = useState<Sudoku | null>(null); // Union type

  useEffect(() => {
    const newSudoku = getSudoku('expert');
    setSudoku(newSudoku);
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleClick = () => {
    const newSudoku = getSudoku('expert'); // Generate a new Sudoku
    setSudoku(newSudoku);
  };

  if (!sudoku) {
    return <div>Loading...</div>; // Important: Handle the initial null state
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className='font-mono tracking-[1em]'>
          {stringToSudokuArray(sudoku.puzzle).map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              {row.join('')}
              <br />
            </React.Fragment>
          ))}
        </div>

        <Button onClick={handleClick}>New Sudoku</Button>
      </main>
    </div>
  );
}