import { Component, OnInit } from '@angular/core';
import { SetupService } from './services/setup.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Learning';

  /*setup is injected to ensure the singleton constructor executes*/
  constructor(private setup: SetupService) {}

  ngOnInit(): void {
    console.info(JSON.stringify(environment));
  }

  get version(): string | null {
    return environment.version ?? null;
  }

  get country(): string | null {
    return environment.countryCode ?? null;
  }
}