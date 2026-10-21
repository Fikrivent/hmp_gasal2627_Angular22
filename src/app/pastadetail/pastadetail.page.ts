import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Foodservice } from '../foodservice';

@Component({
  selector: 'app-pastadetail',
  templateUrl: './pastadetail.page.html',
  styleUrls: ['./pastadetail.page.scss'],
  standalone: false,
})
export class PastadetailPage implements OnInit {
  id = 0;
  pastas: any = []

  constructor(private route: ActivatedRoute, private foodservice: Foodservice) { }

  ngOnInit() {
    // this.pastas = this.foodservice.pastas;
    this.route.params.subscribe(params => {
      //this.index = params['index'];
      this.foodservice.pastaDetail(params['id']).subscribe(
        (data) => {
          this.pastas = data;
        }
      );
    });

  }

}
