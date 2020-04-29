import { fromEvent, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

const rockBtn: HTMLButtonElement = document.getElementById('rock');
const paperBtn: HTMLButtonElement = document.getElementById('paper');
const scissorsBtn: HTMLButtonElement = document.getElementById('scissors');
const result: HTMLElement = document.getElementById('result');

const computerChoice: string[] = ['rock', 'paper', 'scissors'];

const randomize: (a: string[]) => string = (a) =>
  a[Math.floor(Math.random() * a.length)];

const paper$: Subscription = fromEvent(paperBtn, 'click')
  .pipe(map(() => randomize(computerChoice)))
  .subscribe((x) => {
    if (x === 'rock') {
      console.log('Paper beats rock, you win!');
    } else if (x === 'scissors') {
      console.log('Scissors beat paper, you lose!');
    } else {
      console.log('DRAW!');
    }
  });

const scissors$: Subscription = fromEvent(scissorsBtn, 'click')
  .pipe(map(() => randomize(computerChoice)))
  .subscribe(console.log);
const rock$: Subscription = fromEvent(rockBtn, 'click')
  .pipe(map(() => randomize(computerChoice)))
  .subscribe(console.log);

/* 
rock beats scissors
scissors beat paper
paper beats rock 
*/

// of(buttons)
// click 1. => map(() => randomize(computerChoice)), switchMap(() => click 2. randomize(computerChoice))
