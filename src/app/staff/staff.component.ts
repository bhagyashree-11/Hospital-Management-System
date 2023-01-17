import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  //constructor() { }

  ngOnInit(): void {
  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  // ***********************************************StaffData*************************************************
  staffData:any = [
    { 
      Name: "Dr. Vanishree",
      Designation: "Medical Superintendent",
      Department: "Hospital Staff"
    },
    {
      Name: "Dr. Venkatesh",
      Designation: "Medical Officer",
      Department: "Hospital Staff"
    },
  ];

  staffName = "";
  staffDesignation = "";
  staffDepartment = "";

  staffselectedIndex = "";

  staffopenModal(template: TemplateRef<any>,index:any) {

    if (index != 'null'){
      this.staffName = this.staffData[index].Name;
      this.staffDesignation = this.staffData[index].Designation;
      this.staffDepartment = this.staffData[index].Department;
      this.staffselectedIndex = index;
    }


    this.modalRef = this.modalService.show(template);
  }

  staffsubmit(){
    let user = {
      Name:this.staffName,
      Designation:this.staffDesignation,
      Department:this.staffDepartment
    }
    this.staffData.push(user);
    this.staffclose()
  }

  staffupdate(){
    this.staffData[this.staffselectedIndex].Name = this.staffName;
    this.staffData[this.staffselectedIndex].Designation = this.staffDesignation;
    this.staffData[this.staffselectedIndex].Department = this.staffDepartment;
    this.staffclose()
  }

  staffclose(){
    this.staffName = "";
    this.staffDesignation = "";
    this.staffDepartment = "";
    this.modalRef?.hide();
  }

  staffclose1(){
    this.staffName = "";
    this.staffDesignation = "";
    this.staffDepartment = "";
  }

  staffdelete(i:any){
    this.staffData.splice(i,1);
  }



}
