import { Component, OnInit } from '@angular/core';
//con esto obtengo lo que envio desde la url
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

artista:any=[];
loading:boolean;
topTracks: any [] = [];

  constructor(  private router: ActivatedRoute , private service:SpotifyService  ) { 
    this.loading=true;
//obteniendo la url que estoy enviando por parametro
    this.router.params.subscribe(params =>{
    
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
    
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loading=true;
    this.service.getArtista(id).subscribe(data => {
      
      console.log(data);
      this.artista=data;
      this.loading=false
    })
  }


  getTopTracks(id:string){

    this.service.getTopTracks(id).subscribe(data => {

      this.topTracks=data;
    })

    
  }




}
