import { Component, OnInit } from '@angular/core';
import { SetupService } from './services/setup.service';
import { ThemeService } from './services/theme.service';
import { environment } from 'src/environments/environment';
import { Product } from 'src/environments/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  /*services are injected to ensure the singleton constructor executes*/
  constructor(theme: ThemeService, setup: SetupService) { }

  ngOnInit(): void {
    console.info(environment);
  }

  get version(): string | null {
    return environment.version ?? null;
  }

  get product(): Product | null {
    return environment.product ?? null;
  }
}