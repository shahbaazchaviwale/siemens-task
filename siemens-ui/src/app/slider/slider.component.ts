import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  
  public NextPassNumber: number = 2;
  public PrePassNumber: number = 1;
  public nextNumber: number = 1;
  public NextbtnDisable = true;
  public PrebtnDisable = false;
  public data = [
    { "id": 1, "name": "Alita Oliva", "lastseen": "5", "class": "one-1" },
    { "id": 2, "name": "Evliyn Salt", "lastseen": "6", "class": "one-2" },
    { "id": 3, "name": "Maria Dsaouza", "lastseen": "3", "class": "one-3" },
  ];

  constructor() { }

  ngOnInit() {
  }

  previous(){
    if(this.PrePassNumber >= this.data.length ) {
      // this.passNumber = 1
      this.NextbtnDisable = false
    }
      this.data.map( (value, index) => {
        if(index <= this.data.length - 1){
          if(value.id === this.PrePassNumber){
            value.class = 'one-1 ani'
            console.log('data >>');
          }else{
            index <= this.data.length - 2 ? value.class = 'one-'+ (this.nextNumber + 1) : value.class = 'one-'+ index + 1; 
          }
        }
          this.nextNumber--
      });
      console.log('list >>', this.data);
      this.PrePassNumber--;
      this.nextNumber = 1
  }

  next(){

  if(this.NextPassNumber >= this.data.length ) {
    // this.passNumber = 1
    this.NextbtnDisable = false
  }
  this.NextbtnDisable = true;
    this.data.map( (value, index) => {
      if(index <= this.data.length - 1){
        if(value.id === this.NextPassNumber){
          value.class = 'one-1 ani'
          console.log('data >>');
        }else{
          index <= this.data.length - 2 ? value.class = 'one-'+ (this.nextNumber + 1) : value.class = 'one-'+ value.id; 
        }
      }
        this.nextNumber++
    });
    console.log('list >>', this.data);
    this.NextPassNumber++;
    this.nextNumber = 1
  }

  
}
