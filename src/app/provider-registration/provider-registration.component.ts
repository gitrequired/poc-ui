import { Component, OnInit } from '@angular/core';
import { Provider } from '../model/provider';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-provider-registration',
  templateUrl: './provider-registration.component.html',
  styleUrls: ['./provider-registration.component.css']
})
export class ProviderRegistrationComponent implements OnInit {
  provider = new Provider('', '', '', 'Male', '', null, '', '', '');
  title = 'angular-forms';
  checked: boolean;
  prefixHasError: boolean;
  specHasError: boolean;
  sspecHasError: boolean;
  prefixes: Array<string>;
  specializations: Array<string>;
  ngOnInit() {
    this.prefixes = ["Mr.", "Mrs.", "Miss.", "Dr."];
    this.specializations = ['Cardiologist', 'orthopedic', 'Neurologist', 'Oncologist', 'Gynecologist'];
  }
  onSubmit(providerForm: NgForm): any {
    console.log(providerForm.value);
  }
  isChecked(e) {
    if (e.target.checked) {
      this.checked = true;
    } else {
      this.checked = false;
    }

  }
  validateSpec(value) {
    if (value == "default") {
      this.specHasError = true;
    } else {
      this.specHasError = false;
    }
  }
  validateSspec(value) {
    if (value == "default") {
      this.sspecHasError = true;
    } else {
      this.sspecHasError = false;
    }
  }
  validatePrefix(value) {
    if (value == "default") {
      this.prefixHasError = true;
    } else {
      this.prefixHasError = false;
    }
  }

  resetForm(providerForm:NgForm){
    providerForm.reset();
  }
}
