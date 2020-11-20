import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent{
 parentExample: string = '';

  data = [
    {
      date: 'Nov 16, 2020',
      transaction: [
        {
          descriptor: 'ethNinG',
          amount: '6.95',
          merchantId: 'hqRvXt871lljT6Lk',
          arn: '20292029202920292029001',
        },
        {
          descriptor: 'ethChr',
          amount: '361.55',
          merchantId: 'oKwDM8W8RzYP3vOl',
          arn: '20292029202920292029002',
        },
      ],
    },
    {
      date: 'Nov 15, 2020',
      transaction: [
        {
          descriptor: 'ethAr',
          amount: '655.69',
          merchantId: 'rKQzW7r24w9uOTtu',
          arn: '20292029202920292029003',
        },
        {
          descriptor: 'ethHotl',
          amount: '27.00',
          merchantId: 'PArVICpC8bAzlM9f',
          arn: '20292029202920292029004',
        },
      ],
    },
    {
      date: 'Nov 14, 2020',
      transaction: [
        {
          descriptor: 'ethCarRt',
          amount: '108.47',
          merchantId: 'fwMmOY9T7gWAPoHH',
          arn: '20292029202920292029005',
        },
        {
          descriptor: 'ethNinG',
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
          descriptor: 'ethTk',
          amount: '101.90',
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

  initTransactionDetails(merchantId:string,arn:string){
    this.parentExample=merchantId+','+arn;
    window.location.href="assets/chatbot.html?userId="+this.parentExample;
  }
}
