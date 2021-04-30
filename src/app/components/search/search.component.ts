import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:SpotifyService) { }

  artista: any[] = [];

  ngOnInit(): void {
  }

  buscar(termino:string){


    this.service.getArtistas(termino).subscribe((data:any) => {

          this.artista = data;

    })
     
  }

}
