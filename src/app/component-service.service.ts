import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Elec_comp } from './model/elec_comp';
import { PCB } from './model/pcb';

@Injectable({
  providedIn: 'root'
})
export class ComponentServiceService {

  private path = "http://localhost:3000"
  public cart: Array<Elec_comp> = [];
  constructor(private clienteHttp: HttpClient) { }
  
  public getAllComponents() {
    return this.clienteHttp.get<Elec_comp[]>(this.path+"/elec-comp");
  }
  public getComponent(id: string) {
    return this.clienteHttp.get<Elec_comp>(this.path+"/elec-comp/"+id);
  }
  public getAllPCBs() {
    return this.clienteHttp.get<PCB[]>(this.path+"/pcb");
  }
  public getPCB(id: string) {
    return this.clienteHttp.get<PCB>(this.path+"/pcb/"+id);
  }
  public addComponent(component: Elec_comp) {
    return this.clienteHttp.post(this.path + "/elec-comp", component);
  }
  public addPCB(pcb: PCB) {
    return this.clienteHttp.post(this.path + "/pcb", pcb);
  }
  public updateComponent(component: Elec_comp) {
    return this.clienteHttp.put(this.path + "/elec-comp/" + component.internal_code, component);
  }
  public updatePCB(pcb: PCB) {
    return this.clienteHttp.put(this.path + "/pcb/" + pcb.pcb_code, pcb);
  }
  public deleteComponent(component: Elec_comp) {
    return this.clienteHttp.delete(this.path + "/elec-comp/" + component.internal_code);
  }
}
