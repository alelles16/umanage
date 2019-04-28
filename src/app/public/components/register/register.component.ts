import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this.fb.group({
      name: [null, [Validators.required]],
      lastname: [null, [Validators.required]],
      identification: [null, [Validators.required]],
      email: [null, [Validators.email]],
      phoneNumber: [null, [Validators.required, Validators.maxLength(10)]],
      phoneNumberPrefix: ["+57"],
      address: [null, [Validators.required]],
      birthDate: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    for (const i in this.registerForm.controls) {
      this.registerForm.controls[i].markAsDirty();
      this.registerForm.controls[i].updateValueAndValidity();
    }
    localStorage.setItem(
      "currentUser",
      JSON.stringify(this.registerForm.value)
    );
  }
}
