import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {

  //constructor() { }

  ngOnInit(): void {
  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  // *******************************************************BillingData*****************************************************
  

  BillingData:any = [
    { 
      Name: "Vanishree",
      Date: "2022-08-02",
      Method: "Credit card",
      Amount: "30000"
    },
    {
      Name: "Venkatesh",
      Date: "2022-08-02",
      Method: "Mobile Payment", 
      Amount: "10000"
    },
  ];

  billingName = "";
  billingDate = "";
  billingMethod = "";
  billingAmount = "";

  billingselectedIndex = "";

  billingopenModal(template: TemplateRef<any>,index:any) {

    if (index != 'null'){
      this.billingName = this.BillingData[index].Name;
      this.billingDate = this.BillingData[index].Date;
      this.billingMethod = this.BillingData[index].Method;
      this.billingAmount = this.BillingData[index].Amount;
      this.billingselectedIndex = index;
    }


    this.modalRef = this.modalService.show(template);
  }

  billingsubmit(){
    let user = {
      Name:this.billingName,
      Date:this.billingDate,
      Method:this.billingMethod,
      Amount:this.billingAmount
    }
    this.BillingData.push(user);
    this.billingclose()
  }

  billingupdate(){
    this.BillingData[this.billingselectedIndex].Name = this.billingName;
    this.BillingData[this.billingselectedIndex].Date = this.billingDate;
    this.BillingData[this.billingselectedIndex].Method = this.billingMethod;
    this.BillingData[this.billingselectedIndex].Amount = this.billingAmount;
    this.billingclose()
  }

  billingclose(){
    this.billingName = "";
    this.billingDate = "";
    this.billingMethod = "";
    this.billingAmount = "";
    this.modalRef?.hide();
  }

  billingclose1(){
    this.billingName = "";
    this.billingDate = "";
    this.billingMethod = "";
    this.billingAmount = "";
  }

  billingdelete(i:any){
    this.BillingData.splice(i,1);
  }


}
