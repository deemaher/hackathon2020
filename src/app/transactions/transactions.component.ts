import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent{
merchantId: string = '';
 arn: string = "";
 descriptor: string = '';
 amount: string = '';
 date: string = '';

  data = [
    {
      date: 'Nov 16, 2020',
      transaction: [
        {
          descriptor: '100 ETH ** NINJA GAM*',
          amount: '31.75',
          merchantId: 'hqRvXt871lljT6Lk',
          arn: '20292029202920292029001',
        },
        {
          descriptor: '#WWW.ETH*CHAIRS.CA',
          amount: '39.15',
          merchantId: 'oKwDM8W8RzYP3vOl',
          arn: '20292029202920292029002',
        },
      ],
    },
    {
      date: 'Nov 15, 2020',
      transaction: [
        {
          descriptor: 'AIR 2020',
          amount: '1531.75',
          merchantId: 'rKQzW7r24w9uOTtu',
          arn: '20292029202920292029003',
        },
        {
          descriptor: 'ETH*HOTEL.COM NORTH YORK',
          amount: '229.05',
          merchantId: 'PArVICpC8bAzlM9f',
          arn: '20292029202920292029004',
        },
      ],
    },
    {
      date: 'Nov 14, 2020',
      transaction: [
        {
          descriptor: '+1 866-215-2883 ETHOCA',
          amount: '227.75',
          merchantId: 'fwMmOY9T7gWAPoHH',
          arn: '20292029202920292029005',
        },
        {
          descriptor: '100 ETH ** NINJA GAM*',
          amount: '43.45',
          merchantId: 'hqRvXt871lljT6Lk',
          arn: '20292029202920292029006',
        },
      ],
    },
    {
      date: 'Nov 13, 2020',
      transaction: [
        {
          descriptor: 'TTS ***    TICKETS.COM',
          amount: '29.55',
          merchantId: 'BCU6w2giF67i9LH4',
          arn: '20292029202920292029007',
        },
      ],
    },
    {
      date: 'Nov 12, 2020',
      transaction: [
        {
          descriptor: 'ethMd',
          amount: '77.88',
          merchantId: 'q88i6xmAsPPSgD5p',
          arn: '20292029202920292029009',
        },
      ],
    }
  ];

  constructor(private router: Router) { }

  initTransactionDetails(merchantId:string,arn:string, descriptor:string, amount: string, date: string){
    this.merchantId=merchantId;
    this.arn = arn;
    this.descriptor = descriptor;
    this.amount = amount;
    this.date = date;

    this.router.navigate(['transactionDetail', {merchantId: this.merchantId, arn: this.arn, descriptor: this.descriptor, amount: this.amount, date: this.date}]);
  }

  back(){
    window.location.href="/";
  }
}
