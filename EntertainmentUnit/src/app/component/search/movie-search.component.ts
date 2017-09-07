import {Component,OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Model } from './../../model';
import { Router } from '@angular/router';
import { MovieSearchService } from './../../movie-Search.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
	selector:'movie-search',
	templateUrl:'./movie.search.html',
})

export class MovieSearchComponent implements OnInit{
	@Output() movieData=new EventEmitter();
	title: 'Movie';
	data:Model[];
	movies:Observable<Model[]>;
	private searchMovie=new Subject<string>();

	constructor(
		private movieSearchService:MovieSearchService){}

	search(movie:string):any{
		this.movieSearchService.search(movie).subscribe((data)=>{ this.data=data;this.movieData.emit(this.data);});
	}

    display(data): any{
   	this.movieSearchService.getMovie(this.data)
	.subscribe(data => {this.data = data})
	console.log("success");
   } 
   
   insertMovie(movie):any{
   	this.movieSearchService.create(movie.title, movie.poster_path, movie.release_date)
   	.subscribe(data =>{this.data = data})
   	console.log("inserted")
   }

	ngOnInit():void{

		 this.movies = this.searchMovie
      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap(movie=> movie ? this.movieSearchService.search(movie): Observable.of<Model[]>())
      .catch(error => {
                console.log(error);
        return Observable.of<Model[]>([]);
      });
	}
}