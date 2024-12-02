<<<<<<< HEAD
import { Injectable, signal, WritableSignal } from '@angular/core';
=======
import { Injectable } from '@angular/core';
>>>>>>> 79f92169428bac774ff2772401cdfbfc030c0013

@Injectable({
  providedIn: 'root'
})
export class LoginService {

<<<<<<< HEAD
  loginEffettuato: WritableSignal<boolean> = signal(false);

  constructor() { }

  login(username: string, password: string):void {
    // Fake login
    if(username == 'utente' && password == 'cisco') {
      // ok, login effetuato correttamente
      this.loginEffettuato.set(true);
    }
  }

  logout() {
    this.loginEffettuato.set(false);
  }
=======
  constructor() { }
>>>>>>> 79f92169428bac774ff2772401cdfbfc030c0013
}
