import { Component } from "@angular/core";
import { RediffUser } from "./rediffuser.model";
import { FormBuilder,FormGroup,Validators } from "@angular/forms";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  userFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
       firstName:['',Validators.required],
  emailId:['',Validators.required],
  password:['',Validators.required],
  confirmPassword:['',Validators.required],
  altEmailId:['',Validators.required],
  countryCode:['+91',Validators.required],
  mobileNo:['',Validators.required],
  day:['Day',Validators.required],
  month:['Month',Validators.required],
  year:['Year',Validators.required],
  gender:['',Validators.required],
  country:['India',Validators.required]
    });
  }

  name = "Create a Rediffmail account";
  submit() {
    console.log(this.userFormGroup.value);
  }
}
