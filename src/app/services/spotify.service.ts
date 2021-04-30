import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import  { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(  private http:HttpClient) { }

  getQuery(query:string){

    const url = `https://api.spotify.com/v1${ query }`

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAu7fG3tQ-JtCWClgCTwqu4bvmDatVF-2Tu9-Pbq_Tz3DLThYQBTXROhJd3ROSuNEcxKJVJd_SxJjAnIkM '
    });

    return this.http.get(url , {headers})

  }


  getNewReleases(){



   return  this.getQuery('/browse/new-releases').pipe(
    map( (data:any) => {
       return data.albums.items;

    })
  )
   
  

  }



  getArtistas(termino:string){
 

    return this.getQuery(`/search?q=${termino}&type=artist`).pipe(
      map( (data:any) => {
          return data.artists.items;
      })
    )
      
  }

  getArtista(id:string){
 

    return this.getQuery(`/artists/${ id }`);
      
  }
 

  getTopTracks(id:string){
 

    return this.getQuery(`/artists/${ id }/top-tracks?country=us`).pipe(
      map((data:any) =>{
        return data['tracks']
      } )
    );
      
  }






}
