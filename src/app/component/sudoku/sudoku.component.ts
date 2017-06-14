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
      this.getPuzzle();
  }
  getPuzzle(){
      this.swapRow();
      this.swapCol();
      this.swapRowGroup();
      this.swapColGroup();
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
  getSwapGroupNum(){
      let num=[];
      num[0] = this.randomNum(0,2);
      num[1] = this.randomNum(0,2);
      while (num[0] == num[1])
      {
          num[0] = this.randomNum(0,2);
          num[1] = this.randomNum(0,2);
      }
      let swapRowNo1,swapRowNo2;
      if (num[0] ==2)
      {
          swapRowNo1=6;         
      } else if (num[0] ==1){
          swapRowNo1=3;
      } else {
          swapRowNo1=0;
      }
      if (num[1] ==2)
      {
          swapRowNo2=6;         
      } else if (num[1] ==1){
          swapRowNo2=3;
      } else {
          swapRowNo2=0;
      }
      return num = [swapRowNo1, swapRowNo2];
  }
  swapRow(){
      let rowNo = this.getSwapNum();
      for(let i=0;i<6;i+=2)
      {
          let temp = this.puzzle[rowNo[i]];
          this.puzzle[rowNo[i]] = this.puzzle[rowNo[i+1]];
          this.puzzle[rowNo[i+1]] = temp;
      }
  }
  swapCol(){
      let colNo = this.getSwapNum();
      for(let i=0;i<6;i+=2)
      {
          for(let j=0;j<9;j++)
          {
              let temp = this.puzzle[j][colNo[i]];
              this.puzzle[j][colNo[i]] = this.puzzle[j][colNo[i+1]];
              this.puzzle[j][colNo[i+1]] = temp;              
          }
      }
  }
  swapRowGroup(){
      let rowNo = this.getSwapGroupNum();
      for(let i=0;i<3;i++)
      {
          let temp = this.puzzle[rowNo[0]+i];
          this.puzzle[rowNo[0]+i] = this.puzzle[rowNo[1]+i];
          this.puzzle[rowNo[1]+i] = temp;   
      }
  }
  swapColGroup(){
      let colNo = this.getSwapGroupNum();
      for(let i=0;i<3;i++)
      {
          for(let j=0;j<9;j++)
          {
              let temp = this.puzzle[j][colNo[0]+i];
              this.puzzle[j][colNo[0]+i] = this.puzzle[j][colNo[1]+i];
              this.puzzle[j][colNo[1]+i] = temp;              
          }   
      }
  }
}
