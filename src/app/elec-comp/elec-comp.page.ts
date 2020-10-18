import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComponentServiceService } from '../component-service.service';
import { Elec_comp } from '../model/elec_comp';

@Component({
  selector: 'app-elec-comp',
  templateUrl: './elec-comp.page.html',
  styleUrls: ['./elec-comp.page.scss'],
})
export class ElecCompPage implements OnInit {

  private elec_comp = new Elec_comp();
  private id_ingresado: string;

  constructor(private activateRoute: ActivatedRoute, private compServ: ComponentServiceService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap => {
        this.compServ.getComponent(paramMap.get("internal_code"))
          .subscribe(datos => {
            this.elec_comp = datos;
          });
      });
  }

}
