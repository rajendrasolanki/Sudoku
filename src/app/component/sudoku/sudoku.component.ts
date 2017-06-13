import { Component, OnInit } from '@angular/core';
import { GenerateSudokuService } from '../../service/generateService/generate-sudoku.service';

@Component({
  selector: 'app-sudoku',
  templateUrl: './sudoku.component.html',
  styleUrls: ['./sudoku.component.css'],
  providers: [GenerateSudokuService]
})
export class SudokuComponent implements OnInit {
    private puzzle=[];
    constructor() { }

  ngOnInit() {
      this.getSudoku();
      console.log(this.getSwapNum());
  }
  
  getSudoku(){
     let k=1,n=1;
     for(let i=0;i<9;i++)
     {
         k=n;
         let temp=[];
         for(let j=0;j<9;j++){
             if(k<=9){
                 temp.push(k);
                 k++;
             }
             else{
                 k=1;
                 temp.push(k);
                 k++;
             }
         }
         this.puzzle.push(temp);
         n=k+3;
         if(k==10){
             n=4;
         }
         if(n>9){
             n=(n%9)+1;
         }
     }
  }
  randomNum(min,max){
      return Math.floor(Math.random()*(max-min+1))+min;
  }
  getSwapNum(){
      let num=[];
      let n=0;
      for(let i=0;i<6;i+=2)
      {
          num[i] = this.randomNum(n,n+2);
          num[i+1] = this.randomNum(n,n+2);
          while (num[i] == num[i+1])
          {
              num[i] = this.randomNum(n,n+2);
              num[i+1] = this.randomNum(n,n+2);
          }
          n+=3;
      }
      return num;
  }
  
}
