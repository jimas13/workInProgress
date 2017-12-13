import { Component, OnInit } from '@angular/core';
import { get } from 'selenium-webdriver/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { SpotifyService } from '../spotify.service';
import { error } from 'util';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  
  constructor(private _spotifyService:SpotifyService) { }
  


  updateSearchTable(){
    this._spotifyService.fetchData()
    .subscribe(obj => {
      return obj;
    },
    (error) => {
      err => console.log(err)
    });
  }

  ngOnInit() {
  }

}
