import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {
  // pour des raisons de sécurité ce service contient les paramètres qu'on devrait normalement faire passer dans les url
  private email!:string;
  constructor() { }

  setEmail(email:string){
    this.email=email;
  }

  getEmail(){
    return this.email;
  }
}
