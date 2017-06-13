import { Injectable } from '@angular/core';


@Injectable()
export class GenerateSudokuService {

  constructor() { }
  private puzzle=[];
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
     return this.puzzle;
  }

}
