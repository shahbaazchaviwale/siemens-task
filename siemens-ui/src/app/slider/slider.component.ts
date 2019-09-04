import { Component, OnInit } from '@angular/core';
import { SliderService } from './slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  public NextPassNumber = 2;
  public nextNumber = 1;

  public PrePassNumber = 1;
  public NextbtnDisable = true;
  public PrebtnDisable = false;
  // public data = [
  //   { id: 1, name: 'Alita Oliva', lastseen: '5', class: 'one-1' },
  //   { id: 2, name: 'Evliyn Salt', lastseen: '6', class: 'one-2' },
  //   { id: 3, name: 'Maria Dsaouza', lastseen: '3', class: 'one-3' },
  // ];

  public photosList;
  constructor(private photoService: SliderService) { }

  ngOnInit() {
    this.photoService.getPhotos().subscribe(photoList => {
      this.photosList = this.edit(photoList);
    });
  }
  edit(data){
    let list = data.filter( f => f.id <= 3);
    list.map( (element, i) => {
      element.name = "Monti-"+i;
      element.lastseen = i + 3;
      element.class = "one-" + (i + 1);
    });
    return list;
  }
 


  // next() {
  //   this.nextNumber = 1;
  //   if (this.NextPassNumber === this.data.length + 1) {
  //     this.NextPassNumber = 2;
  //   }
  //   const  arrShift = this.data.shift();
  //   this.data.push(arrShift);

  //   this.data.map( (value) => {
  //   if (value.id === this.NextPassNumber ) {
  //     value.class = 'one-' + this.nextNumber + ' ani';
  //   } else {
  //     value.class = 'one-' + this.nextNumber;
  //   }
  //   // value.base = 'active'
  //   this.nextNumber++;
  // });
  //   this.NextPassNumber++;
  //   console.log(' data >>', this.data);
  // }
}
