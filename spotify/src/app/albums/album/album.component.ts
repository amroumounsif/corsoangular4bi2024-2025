<<<<<<< HEAD
import { Component, computed, effect, input, InputSignal, Signal } from '@angular/core';
=======
import { Component, input, InputSignal } from '@angular/core';
>>>>>>> 79f92169428bac774ff2772401cdfbfc030c0013
import { Item } from '../../i-albums';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})
export class AlbumComponent {
  album: InputSignal<Item> = input.required<Item>();
}
