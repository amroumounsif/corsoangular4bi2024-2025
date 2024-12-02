import { Component, inject, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { Song } from '../song';
import { PlaylistService } from '../playlist.service';
@Component({
  selector: 'app-song-list',
  standalone: true,
  imports: [],
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.css'
})
export class SongListComponent {
  songs: InputSignal<Song[]> = input<Song[]>([]);
  indexPlaylist: InputSignal<number> = input.required<number>();
  // Esempio di dependency injection senza uso del costruttore
  playListService = inject(PlaylistService);

  indexEditSong: WritableSignal<number> = signal<number>(-1);
  
  removeSong(indexSong: number) {
    this.playListService.removeSong(this.indexPlaylist(), indexSong);
  }

  editSong(index: number) {
    this.indexEditSong.set(index);
  }

  save(id: number, title: HTMLInputElement, artist: HTMLInputElement, genre: HTMLInputElement, duration: HTMLInputElement, rating: HTMLInputElement) {
    let newSong: Song = new Song(id, title.value, artist.value, genre.value, parseInt(duration.value), parseInt(rating.value));

    this.playListService.editSong(newSong.id, newSong.title, newSong.artist, newSong.genre, newSong.duration, newSong.rating);    
    this.indexEditSong.set(-1);
  }

  undo() {
    this.indexEditSong.set(-1);
  }
}