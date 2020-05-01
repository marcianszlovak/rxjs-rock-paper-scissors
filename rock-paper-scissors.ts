import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

const rockBtn: HTMLButtonElement = document.getElementById(
  'rock'
) as HTMLButtonElement;
const paperBtn: HTMLButtonElement = document.getElementById(
  'paper'
) as HTMLButtonElement;
const scissorsBtn: HTMLButtonElement = document.getElementById(
  'scissors'
) as HTMLButtonElement;
const result: HTMLElement = document.getElementById('result');

const computerChoice: string[] = ['rock', 'paper', 'scissors'];

const outputResult = (myChoice: string, opponentChoice: string) => {
  const winningCondition = getWinningCondition(myChoice, opponentChoice);
  const losingCondition = getLosingCondition(myChoice, opponentChoice);

  winningCondition
    ? console.log(`${myChoice} beats ${opponentChoice}, You WIN!`)
    : null;

  losingCondition
    ? console.log(`${opponentChoice} beats ${myChoice}, You Lose!`)
    : null;

  myChoice === opponentChoice ? console.log(`It's a DRAW!`) : null;
};

const getLosingCondition: (
  myChoice: string,
  opponentChoice: string
) => boolean = (a, b) =>
  (a === 'paper' && b === 'scissors') ||
  (a === 'scissors' && b === 'rock') ||
  (a === 'rock' && b === 'paper');

const getWinningCondition: (
  myChoice: string,
  opponentChoice: string
) => boolean = (a, b) =>
  (a === 'paper' && b === 'rock') ||
  (a === 'scissors' && b === 'paper') ||
  (a === 'rock' && b === 'scissors');

const randomize: (a: string[]) => string = (a) =>
  a[Math.floor(Math.random() * a.length)];

fromEvent(paperBtn, 'click')
  .pipe(map(() => randomize(computerChoice)))
  .subscribe((randomComputerChoice: string) =>
    outputResult('paper', randomComputerChoice)
  );

fromEvent(scissorsBtn, 'click')
  .pipe(map(() => randomize(computerChoice)))
  .subscribe((randomComputerChoice: string) =>
    outputResult('scissors', randomComputerChoice)
  );

fromEvent(rockBtn, 'click')
  .pipe(map(() => randomize(computerChoice)))
  .subscribe((randomComputerChoice: string) =>
    outputResult('rock', randomComputerChoice)
  );
