import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  token: string;
  credentialsForm: FormGroup;
  email: string;
  
  constructor(
    private _formBuilder: FormBuilder,
    private active: ActivatedRoute,
    private _authService: AuthService
  ) { }
  
  checkToken() {
    this._authService.VerifyUser(this.token).subscribe();
    
    //get the users email
    this._authService.getUser(this.token).subscribe();
  }

  ngOnInit() {
    this.token = this.active.snapshot.paramMap.get('token');
    this.checkToken();
    
   

    this.credentialsForm = this._formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    console.log('this is a passing');
  }
}
