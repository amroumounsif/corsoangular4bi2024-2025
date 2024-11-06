import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  clientId: string = '32c8f705bca34d008e9b27ee2d801cba';
  clientSecret: string = '07dbaa796793450f8b762e7a50ea2107';

  constructor() { }
}
