import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Model } from './model';

import 'rxjs/add/operator/map';

@Injectable()
export class MovieSearchService{
    ExpressUrl = 'http://localhost:3030'
	constructor(private http:Http){};
	
    movie:Model[]=[];
	search(movie : string): Observable<Model[]>{
    const movieUrl : string = "http://api.themoviedb.org/3/search/movie?api_key=fd5603c1ab1605b78d868c5d690e360d&query="+movie;
		return this.http
		.get(movieUrl)
		.map((result) =>  <Model[]>result.json()) 
		.catch(this.handleError);
		}
    
     getmovies(movie:any){
   
      const API_KEY="?api_key=fd5603c1ab1605b78d868c5d690e360d";
      const URL="https://api.themoviedb.org/3/";
      const SEARCH="search/movie";
      const QUERY="&query=";
    if (movie==" ") {
      window.alert("Please Enter The Data");
    
}

 return this.http.get(URL+SEARCH+API_KEY+QUERY+movie)
 .map((res:Response)=>res.json());
  }

getMovie(title:any): Observable<Model[]> {
    const ExpressUrl = this.ExpressUrl;
     return this.http.get(ExpressUrl)
       .map(response => response.json() as Model)
       .catch(this.handleError);
   }

create(title:string, poster_path:string, release_date:string): Observable<Model[]> {
	console.log(title);
    const ExpressUrl=this.ExpressUrl;
    return this.http
      .post(this.ExpressUrl, {title:title, poster_path:poster_path, release_date:release_date})
      .map(res => res.json() as Model)
      .catch(this.handleError);
  }
	
private handleError(error: any): Promise<any>{
	console.error('An error occured', error);
	return Promise.reject(error.message || error);}
}

/*import {Injectable} from '@angular/core';
import {Headers, Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { MovieSchema } from '../model/movieSchema'

import 'rxjs/add/operator/toPromise';
@Injectable()

export class MainService {
   ExpressUrl = 'http://localhost:3011'
  constructor(private http:Http){}
  getmovies(movie:any){
   
      const API_KEY="?api_key=435c7153d573650556c366889ce90732";
      const URL="https://api.themoviedb.org/3/";
      const SEARCH="search/movie";
      const QUERY="&query=";
    if (movie==" ") {
      window.alert("Please Enter The Data");
    
}

 return this.http.get(URL+SEARCH+API_KEY+QUERY+movie)
 .map((res:Response)=>res.json());
  }

getMovie(title:string): Promise<MovieSchema> {
    const url = `${this.ExpressUrl}/`;
     return this.http.get(url)
       .toPromise()
       .then(response => response.json() as MovieSchema)
       .catch(this.handleError);
   }

create(title:string ): Promise<MovieSchema> {
    const insUrl=`${this.ExpressUrl}/users`;
    return this.http
      .post(insUrl, {name:name})
      .toPromise()
      .then(res => res.json() as MovieSchema)
      .catch(this.handleError);
  }



  handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}*/
