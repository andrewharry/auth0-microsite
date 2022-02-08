import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  username!: string;

  constructor() { }

  ngOnInit(): void {
    const { username } = history.state || {}
    this.username = username;
  }

}
