import { Component, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HospitalManagementRouting';
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  // ***********************************************************LoginData******************************************************

loginopenModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

loginEmail = "";
loginPassword = "";

login(){
  console.log('email',this.loginEmail);
  console.log('password',this.loginPassword);
  this.loginclose();
}
loginclose(){
  this.loginEmail = "";
  this.loginPassword = "";
  this.modalRef?.hide()
}
loginclose1(){
  this.loginEmail = "";
  this.loginPassword = "";
}

//******************************************************RegistrationData*************************************************
registeropenModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}

registerName = "";
registerEmail = "";
registerPhone = "";
registerReason = "";

register(){
  console.log('Name',this.registerName);
  console.log('Email',this.registerEmail);
  console.log('Phone',this.registerPhone);
  console.log('Reason',this.registerReason);
  this.registerclose()
}
registerclose(){
  this.registerName = "";
  this.registerEmail = "";
  this.registerPhone = "";
  this.registerReason = "";
  this.modalRef?.hide()
}

registerclose1(){
  this.registerName = "";
  this.registerEmail = "";
  this.registerPhone = "";
  this.registerReason = "";
}

}
