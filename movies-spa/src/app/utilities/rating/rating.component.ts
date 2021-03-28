import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maxRating = 5;
  @Input() selectedRate = 0;
  prevRate = 0;
  maxRatingArr = [0];

  constructor() { }

  ngOnInit(): void {
    this.maxRatingArr = Array(this.maxRating).fill(0);
  }
 // tslint:disable-next-line:typedef
 handleMouseEnter( index: number){
  this.selectedRate = index + 1;
  console.log(index);
}
 // tslint:disable-next-line:typedef
 handleMouseLeave( ){
   if ( this.prevRate !== 0){
     this.selectedRate = this.prevRate;
   } else {
    this.selectedRate = 0;

   }
}
// tslint:disable-next-line:typedef
rate(index: number){
  this.selectedRate = index + 1;
  this.prevRate = this.selectedRate;
}

}
