import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  token: string;
  
  constructor(
    private active: ActivatedRoute,
    private _authService: AuthService
  ) { }
  
  checkToken() {
    this._authService.VerifyUser(this.token).subscribe();
  }

  ngOnInit() {
    this.token = this.active.snapshot.paramMap.get('token');
    this.checkToken();
    console.log(this.token)
  }

}
