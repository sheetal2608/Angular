import { Component } from '@angular/core';
import { MovieSearchComponent } from './component/search/movie-search.component';
import { MovieSearchService } from './movie-Search.service';
import { MovieDetailComponent } from './component/detail/movie-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  providers:[MovieSearchService]
})
export class AppComponent {
  title = 'app';
	output_data:string;

  handleMovieData(data){
  	this.output_data=data;
	}

}
