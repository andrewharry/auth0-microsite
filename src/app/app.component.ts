import { Component } from '@angular/core';
import { SetupService } from './services/setup.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Learning';

  /*setup is injected to ensure the singleton constructor executes*/
  constructor(private setup: SetupService) {}

  get version(): string | null {
    return environment.version ?? null;
  }

  get country(): string | null {
    return environment.countryCode ?? null;
  }
}