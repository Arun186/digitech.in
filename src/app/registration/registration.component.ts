import { Component } from '@angular/core';
import{FormGroup,FormControl, Validators, FormBuilder,ReactiveFormsModule} from '@angular/forms'
import { RestAPICallService } from 'src/app/rest-apicall.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  isValidFormSubmitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  msgcheck=false;
  addUsersDetails:any=FormGroup

  constructor(private userservice:RestAPICallService, private formbuilder:FormBuilder) { 
    this.addUsersDetails=formbuilder.group({
        username :new FormControl('',Validators.required),
        password :new FormControl('',Validators.required),
        email :new FormControl('',[Validators.required, Validators.email,Validators.pattern(this.emailPattern)]),
        mobnumber :new FormControl('',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
        adhaarcard :new FormControl('',[Validators.required,Validators.pattern("^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$")]),
        address :new FormControl('',Validators.required),
        state :new FormControl('',Validators.required),
        pancard :new FormControl('',[Validators.required,Validators.pattern("^([A-Z]){5}([0-9]){4}([A-Z]){1}$")]),
        city :new FormControl('',Validators.required),
        pincode :new FormControl('',[Validators.required,Validators.pattern("^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$")]),
        gender: new FormControl('', [Validators.required]),
        terms: new FormControl('', [Validators.required,Validators.requiredTrue])
    })
  }
  SaveData(){
    console.log(this.addUsersDetails.value.username);
    console.log(this.addUsersDetails.value.password);
    this.msgcheck=true;
    this.userservice.SaveUsersDetails(this.addUsersDetails.value).subscribe((result:any)=>{
      console.log(result);
   })}
  get f(){  
    return this.addUsersDetails.controls;  
  }  

}
