import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service'
import { Giphys } from '../giphys';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
gifs:Giphys [];
  constructor( public httpService:HttpServiceService) { }

  ngOnInit() {
    this.searchGif('nature');
  }
  searchGif(searchIt){
    this.httpService.searchaGif(searchIt).then(
      (results)=>{
        this.gifs = this.httpService.gifys;
      },
      (error)=>{
        console.log('error')
      }
     )
    
  }

}