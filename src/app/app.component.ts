import { Component, OnInit } from '@angular/core';
import { SetupService } from './services/setup.service';
import { environment } from 'src/environments/environment';
import { Product } from 'src/environments/interfaces';

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
    console.info(environment);
  }

  get version(): string | null {
    return environment.version ?? null;
  }

  get product(): Product | null {
    return environment.product ?? null;
  }
}