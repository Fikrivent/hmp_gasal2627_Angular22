import { Component, OnInit } from '@angular/core';
import { Foodservice } from '../foodservice';

@Component({
  selector: 'app-pasta',
  templateUrl: './pasta.page.html',
  styleUrls: ['./pasta.page.scss'],
  standalone: false,
})
export class PastaPage implements OnInit {

  jenistampilan: string = "accordion"
  pastas: any = []

  constructor(private foodservice: Foodservice) { }

  chunkArray(arr: any[], chunkSize: number): any[][] {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  }


  ngOnInit() {
    // this.pastas = this.foodservice.pastas;
    this.foodservice.pastaList().subscribe(
      (data) => {
        this.pastas = data;
      }
    );
  }

}
