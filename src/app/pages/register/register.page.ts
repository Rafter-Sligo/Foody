import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service'
import { IUser } from 'src/app/interface/IUsers';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentialsForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private authService: AuthService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      FirstName: [''],
      LastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    const newUser: IUser = {
      email: this.credentialsForm.get('email').value,
      firstName: this.credentialsForm.get('FirstName').value,
      lastName: this.credentialsForm.get('LastName').value,
      password: this.credentialsForm.get('password').value,
    };

    this.authService.register(newUser).subscribe(res => {
      this._router.navigate(['/login']);
    });
    
  }

}
