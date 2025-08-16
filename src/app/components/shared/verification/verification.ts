import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { ButtonDirective } from "primeng/button";

@Component({
  selector: 'app-verification',
  imports: [InputOtpModule, FormsModule, ButtonDirective],
  templateUrl: './verification.html',
  styleUrl: './verification.css'
})
export class Verification {
  value: string = '';

  submit(){
    console.log(this.value);
  }
}
