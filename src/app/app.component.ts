import { Component, OnInit } from '@angular/core';
import { SetupService } from './services/setup.service';
import { ThemeService } from './services/theme.service';
import { environment } from 'src/environments/environment';
import { Product } from 'src/environments/interfaces';
import { ResourceFactory } from './resources/resource.factory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  navbar: string;
  showNavbar: boolean = false;

  /*services are injected to ensure the singleton constructor executes*/
  constructor(resources: ResourceFactory, theme: ThemeService, setup: SetupService){
      this.showNavbar = resources.IsEnabled('Display_Navbar');
      this.navbar = this.showNavbar ? 'navbar' : '';
  }

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