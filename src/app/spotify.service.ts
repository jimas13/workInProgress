import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/mergemap';
import 'rxjs/add/observable/of';
@Injectable()
export class SpotifyService {
  private _searchString: string;
  
  get searchString():string{
    return this._searchString;
  }
  
  set searchString(value:string){
    this._searchString = value;
  }

  constructor(private _http: HttpClient) { }

  fetchData():Observable<any>{
    return this._http.get('https://api.spotify.com/v1/' + this.searchString);
  }

}
