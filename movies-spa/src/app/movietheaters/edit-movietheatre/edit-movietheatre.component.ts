import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movietheatre',
  templateUrl: './edit-movietheatre.component.html',
  styleUrls: ['./edit-movietheatre.component.css']
})
export class EditMovietheatreComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(params => {

    });
  }

}
