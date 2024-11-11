import { Component, OnInit, Signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SpotifyService } from './spotify.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  //questo sinal consente al componente di sapere se è presente il token bearer dell'applicazione
  validToke: Signal<boolean>

  constructor(private spotifyServices: SpotifyService) {
    this.validToke = this.spotifyServices.tokenValid;
  }

  //il metodo ngOnInit viene eseguito poco prima che il COMPONENTE sia disponibile per l'utente,
  //cioè prima che il componente venga eseguito il reandere da parte del browser
  ngOnInit(): void {
    this.spotifyServices.getToken();
  }

}
