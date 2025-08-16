import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { Verification } from '../../../components/shared/verification/verification';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule, CommonModule, ButtonModule, CardModule, InputTextModule ],
  providers: [DialogService],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  form: FormGroup;
  loading: boolean = false;
  ref: DynamicDialogRef | undefined;

  constructor(
    private fb: FormBuilder,
    public dialogService: DialogService
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
    });
  }

  private show() {
    this.ref = this.dialogService.open(Verification, { 
      header: 'Ingresas el código de verificación',
      modal: true,
      closable: false,
    });
  }

  login(){
    this.show();
  }

}
