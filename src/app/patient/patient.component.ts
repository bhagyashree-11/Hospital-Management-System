import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  //constructor() { }

  ngOnInit(): void {
  }

  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  PatientData:any = [
    { 
      Name: "Rohit Shende",
      Age: "23",
      Diagnosis: "Cancer",
      Doctor: "Dr. Sanika"
    },
    {
      Name: "Vaibhav Bhavalkar",
      Age: "24",
      Diagnosis: "Heart", 
      Doctor: "Dr. Ashutosh"
    },
  ];
  patientName = "";
  patientAge = "";
  patientDiagnosis = "";
  patientDoctor = "";

  patientselectedIndex = "";

  patientopenModal(template: TemplateRef<any>,index:any) {
    this.modalRef = this.modalService.show(template);

    if (index != 'null'){
      this.patientName = this.PatientData[index].Name;
      this.patientAge = this.PatientData[index].Age;
      this.patientDiagnosis = this.PatientData[index].Diagnosis;
      this.patientDoctor = this.PatientData[index].Doctor;
      this.patientselectedIndex = index;
    }


  }

  patientsubmit(){
    let user = {
      Name:this.patientName,
      Age:this.patientAge,
      Diagnosis:this.patientDiagnosis,
      Doctor:this.patientDoctor
    }
    this.PatientData.push(user);
    this.patientclose()
  }

  patientupdate(){
    this.PatientData[this.patientselectedIndex].Name = this.patientName;
    this.PatientData[this.patientselectedIndex].Age = this.patientAge;
    this.PatientData[this.patientselectedIndex].Diagnosis = this.patientDiagnosis;
    this.PatientData[this.patientselectedIndex].Doctor = this.patientDoctor;
    this.patientclose()
  }

    patientclose(){
    this.patientName = "";
    this.patientAge = "";
    this.patientDiagnosis = "";
    this.patientDoctor = "";
    this.modalRef?.hide();
  }

  patientclose1(){
    this.patientName = "";
    this.patientAge = "";
    this.patientDiagnosis = "";
    this.patientDoctor = "";
  }

  patientdelete(i:any){
    this.PatientData.splice(i,1);
  }

  
}
