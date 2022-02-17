import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from 'src/environments/interfaces';
import { NavbarService } from './services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  constructor(public navbar: NavbarService){ }

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