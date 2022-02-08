import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Auth0UserProfile } from 'auth0-js';
import { AuthService } from '../services/auth.service';
import { SnackBarService } from '../services/snack-bar.service';

interface Dictionary<T> {
  [Key: string]: T;
}

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  constructor(private route: ActivatedRoute, private auth: AuthService, private snack: SnackBarService) { }

  profile!: Auth0UserProfile;

  ngOnInit(): Promise<void> {
    debugger
    const params = this.parseParms(this.route.snapshot.fragment);

    return this.auth.getUserInfo(params['access_token']).then(v => {
      console.info(v);
      this.profile = v;
    });
  }

  signOut() {
    this.auth.logout(this.profile.clientID);
  }

  parseParms(str: string | null) : Dictionary<string> {
    if (str == null) 
      return {};

    var pieces = str.split("&"), data: any = {}, i, parts;
    // process each query pair
    for (i = 0; i < pieces.length; i++) {
        parts = pieces[i].split("=");
        if (parts.length < 2) {
            parts.push("");
        }
        data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
    }
    return data;
  }
}
