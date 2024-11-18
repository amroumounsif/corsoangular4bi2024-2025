import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { SpotifyService } from '../spotify.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, of, switchMap } from 'rxjs';
import { Search } from '../i-spotify';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']  
})
export class SearchComponent implements OnInit {
  // Dependency injection: uso l'istanza di SpotifyService creata dall'applicazione all'avvio
  spotifyService: SpotifyService = inject(SpotifyService);

  searchInput: FormControl = new FormControl();
  // Signal che gestisce i dati ricevuti da Spotify
  artistList!: WritableSignal<Search>; 

  ngOnInit(): void {
    // Preelaborazione input
    this.searchInput.valueChanges.pipe(
      // Non eseguo la subscribe finché non sono passati 300 millisecondi
      debounceTime(300),
      // Invoca la subscribe solo se il valore è cambiato e non cancellato
      distinctUntilChanged(),
      // Questo funziona perfettamente per scenari come typeahead in cui non sei più interessato alla risposta della richiesta precedente quando arriva un nuovo input.
      switchMap(artistName => {
        if (artistName.length > 0) {  
          return this.spotifyService.searchArtist(artistName);
        } else {
          return of(null);
        }
      })
    )
    .subscribe(dati => {
      if (dati) {
        this.artistList.set(dati);  // Imposto i dati ricevuti nel signal
      }
    });
  }
}
