import { Component,Input} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Model } from '../../model';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { MovieSearchService } from '../../movie-Search.service';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
	selector:'movie-list',
	templateUrl:'./movie-list.component.html'
})

export class MovieDetailComponent{

	title: 'Movie';
	data:Model[];
	movies:Observable<Model[]>;
	/*private searchMovie=new Subject<string>();*/

	@Input() movieData;

	constructor(private movieSearchService:MovieSearchService){ };

	handleMovieData(data){
		console.log(data);

   	}
   
  
	

}
