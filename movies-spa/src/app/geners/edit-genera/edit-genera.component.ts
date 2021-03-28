import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-genera',
  templateUrl: './edit-genera.component.html',
  styleUrls: ['./edit-genera.component.css']
})
export class EditGeneraComponent implements OnInit {

  constructor( private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe( params => {

    });
  }

}
