import { Component, OnInit } from '@angular/core';

interface Product {
  productName: string,
  productDate: Date,
  productPrice: number,
}


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone: false
})
export class ListPage implements OnInit {

  today: string = "25 Agustus 2027";
  currentDate = new Date();
  is5daysago: boolean = false;
  is5daysahead: boolean = false;
  numberclicked = 0;
  numberclickedTom = 0;
  product: Product = {
    productName: 'Apple IPhone 14',
    productDate: new Date(),
    productPrice: 14000000,
  }
  is0: boolean = true;
  is10: boolean = false;
  qty: number = 0;

  couponCode: string = "0000";
  strValid: string = 'Invalid';
  discount: number = 0;

  textColor: string = "red";

  books = [
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      publishedDate: new Date('1960-07-11'),
      price: 7.99,
      discount: 10
    },
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      publishedDate: new Date('1925-04-10'),
      price: 10.99,
      discount: 0
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      publishedDate: new Date('1813-01-28'),
      price: 12.75,
      discount: 5
    }
  ]



  constructor() { }

  validateCoupon() {
    if (this.couponCode == "1234") {
      this.strValid = 'valid';
      this.discount = 5;
      this.textColor = "green";
    }
    else if (this.couponCode == "6789") {
      this.strValid = "valid";
      this.discount = 10;
      this.textColor = "green";
    }
    else {
      this.strValid = "Invalid";
      this.discount = 0;
      this.textColor = "red";
    }
  }

  today_ind(): string {

    const bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni",
      "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

    const hariIni = this.currentDate.getDay(); // Get the current day of the week (0-6, where 0 is Sunday and 6 is Saturday)
    // Get the current day (1-31)
    const d = this.currentDate.getDate();
    // Get the current month (0-11, where 0 is January and 11 is December)
    const m = this.currentDate.getMonth();
    // Get the current year (four-digit year)
    const y = this.currentDate.getFullYear();
    return hari[hariIni] + ", " + d + '-' + bulan[m] + '-' + y;
  }

  goYesterday() {
    this.currentDate.setDate(this.currentDate.getDate() - 1);
    this.numberclicked++;
    if (this.numberclicked == 5) this.is5daysago = true;
  }

  goTomorrow() {
    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.numberclickedTom++;
    if (this.numberclickedTom == 5) this.is5daysahead = true;
  }

  reset() {
    this.currentDate = new Date();
    this.is5daysago = false;
    this.is5daysahead = false;
    this.numberclicked = 0;
    this.numberclickedTom = 0;
  }

  increase() {
    this.qty++;
    if (this.qty == 10) this.is10 = true;
    if (this.qty > 0) this.is0 = false;
  }

  decrease() {
    this.qty--;
    if (this.qty == 0) this.is0 = true;
    if (this.qty < 10) this.is10 = false;
  }

  ngOnInit() {
  }

}
