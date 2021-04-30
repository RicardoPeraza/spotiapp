import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones:any[] = [];

  loading:boolean;

  constructor(private service:SpotifyService) {
    
    this.loading=true;

        this.service.getNewReleases().subscribe((data:any) => {

          console.log(data);
            this.nuevasCanciones=data;
            this.loading=false;
        })


   }

  ngOnInit(): void {
  }

}
