import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] = [];
  items: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
          label: 'Pipes de Angular',
          icon: 'pi pi-desktop',
          items: [
            {
              label: 'Testos y Fechas',
              icon: 'pi pi-align-left'
            },
            {
              label: 'Numeros',
              icon: 'pi pi-dollar'
            },
            {
              label: 'No comunes',
              icon: 'pi pi-globe'
            }
          ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog'
          }

        ]
    }

  ];

  }
}
