import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
// import { SharedModule } from "./shared/shared.module";
// import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: [SharedModule, RouterOutlet] --El import solo es valido si el component es standalone.
})
export class AppComponent implements OnInit{

  title = 'Cesar Luilly';
  constructor(private primengConfig: PrimeNGConfig){
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
