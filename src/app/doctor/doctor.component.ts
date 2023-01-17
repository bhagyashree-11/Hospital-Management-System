import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  //constructor() { }

  ngOnInit(): void {
  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  
  DoctorsData:any = [
    { 
      Name: "Dr. Sanika",
      Expertise: "Neurology",
      Mobile: "998765432",
      Experience: "10"
    },
    {
      Name: "Dr. Ashutosh",
      Expertise: "Dermatologist",
      Mobile: "7654321234", 
      Experience: "20",
    },
  ];
  doctorName = "";
  doctorExpertise = "";
  doctorMobile = "";
  doctorExperience = "";

  doctorselectedIndex = "";

  doctoropenModal(template: TemplateRef<any>,index:any) {
    this.modalRef = this.modalService.show(template);
    if (index != 'null'){
      this.doctorName = this.DoctorsData[index].Name;
      this.doctorExpertise = this.DoctorsData[index].Expertise;
      this.doctorMobile = this.DoctorsData[index].Mobile;
      this.doctorExperience = this.DoctorsData[index].Experience;
      this.doctorselectedIndex = index;
    }
  }

  doctorsubmit(){
    let user = {
      Name:this.doctorName,
      Expertise:this.doctorExpertise,
      Mobile:this.doctorMobile,
      Experience:this.doctorExperience
    }
    this.DoctorsData.push(user);
    this.customerclose()
  }

  doctorupdate(){
    this.DoctorsData[this.doctorselectedIndex].Name = this.doctorName;
    this.DoctorsData[this.doctorselectedIndex].Expertise = this.doctorExpertise;
    this.DoctorsData[this.doctorselectedIndex].Mobile = this.doctorMobile;
    this.DoctorsData[this.doctorselectedIndex].Experience = this.doctorExperience;
    this.customerclose()
  }
  customerclose(){
    this.doctorName = "";
    this.doctorExpertise = "";
    this.doctorMobile = "";
    this.doctorExperience = "";
    this.modalRef?.hide();
  }
  customerclose1(){
    this.doctorName = "";
    this.doctorExpertise = "";
    this.doctorMobile = "";
    this.doctorExperience = "";
  }
  delete(i:any){
    this.DoctorsData.splice(i,1);
  }
  


}
