import { Component, Signal, WritableSignal } from '@angular/core';
import { PlaylistService } from '../playlist.service';
import { Playlist } from '../playlist';

@Component({
  selector: 'app-create-playlist',
  standalone: true,
  imports: [],
  templateUrl: './create-playlist.component.html',
  styleUrl: './create-playlist.component.css'
})
export class CreatePlaylistComponent {
  // numero è una variabile usata solo per spiegarne l'uso (!)
  numero!: number;

  playlist: Signal<Playlist[]>;

  // Dependency injection:
  // la variabile playlistService è il nome con il quale in questo componente
  // faccio riferimento all'oggetto PlaylistService che è stato creato (istanziato)
  // all'avvio dell'applicazione
  // Ricorda: provided in 'root'
  constructor(private playlistService: PlaylistService) {
    this.playlist = this.playlistService.playlistRO;
  }

  createPlaylist(id: HTMLInputElement, name: HTMLInputElement, description: HTMLInputElement): void {
    let newPlaylist: Playlist = new Playlist(parseInt(id.value), name.value, description.value);
    this.playlistService.addPlaylist(newPlaylist);
    
    id.value = '';
    name.value = '';
    description.value = '';
  }

}
