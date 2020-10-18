import { Component } from '@angular/core';
import { ComponentServiceService } from '../component-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private components;

  constructor(private CompServ: ComponentServiceService) {
    CompServ.getAllComponents().subscribe(datos => { this.components = datos });
  }

}
