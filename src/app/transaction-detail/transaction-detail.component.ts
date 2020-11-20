import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit{
  merchantId = this.route.snapshot.paramMap.get('merchantId');
  arn = this.route.snapshot.paramMap.get('arn');
  descriptor = this.route.snapshot.paramMap.get('descriptor');
  amount = this.route.snapshot.paramMap.get('amount');
  date = this.route.snapshot.paramMap.get('date');
  
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(){
    
  }

  openChatBot(){
    window.location.href="assets/chatbot.html?userId="+this.merchantId + ',' + this.arn;
  }

  back(){
    window.location.href="/";
  }

}
