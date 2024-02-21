import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;

  public userForm:FormGroup;
   constructor(fb: FormBuilder) {
      this.usernameCtrl = fb.control('',[Validators.required,Validators.minLength(3)]);
      this.passwordCtrl = fb.control('',[Validators.required,Validators.minLength(6)]);
      this.userForm = fb.group({
         username: this.usernameCtrl,
         password: this.passwordCtrl
     });
   }
   reset(): void {
      this.usernameCtrl.setValue("");
      this.passwordCtrl.setValue("");
   }
   register(): void {
      console.log(this.userForm.value);
   }


}
