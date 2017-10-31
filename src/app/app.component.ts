import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { RateService } from './services/rate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private targetRates: Object = {};
  private rate: Object = {};
  private sortedData: any[] = [];
  private displayArr = [];
  plus = 10;
  private sum = this.plus;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;  
  

  constructor(private rateService: RateService) {

  };

  ngOnInit() {
    this.getRate();
  }

  private getRate(): void {
    this.rateService
    .getRate()
    .subscribe(data => {
        this.rate = JSON.parse(data._body);
        // console.log(typeof this.rate, this.rate);
        for(let prop in this.rate['Valute']) {
          if (!this.rate['Valute'].hasOwnProperty(prop)) continue;
          this.sortedData.push(this.rate['Valute'][prop]);
        }
        console.log(this.sortedData);
        this.appendItems(0, this.sum);
      },
      err => {
        console.log('err');
      });
  }

  onScroll () {
    console.log('scrolled!!')
    const start = this.sum;
    this.sum += this.plus;
    console.log(start, this.sum);
    this.appendItems(start, this.sum);      
  }

  addItems(startIndex, endIndex) {
    // console.log(startIndex, endIndex);
    // console.log(this.sortedData.slice(startIndex, endIndex));
    console.log('--------------------------------');
    for (let i = 0; i < this.sum; ++i) {
      if(!this.sortedData[i]) { 
        console.log('END!!');
        this.plus = 0;
        return;
      }
      this.displayArr.push(this.sortedData[i]);
    }
    console.log(this.displayArr);
  }
  
  appendItems(startIndex, endIndex) {
    if(this.plus != 0) { this.addItems(startIndex, endIndex); }
    
  }  

}

