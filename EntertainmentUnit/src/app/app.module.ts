import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MovieSearchService } from './movie-Search.service';
import { MovieSearchComponent } from './component/search/movie-search.component';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
   MovieSearchComponent
  ],
  imports: [
    BrowserModule,HttpModule
  ],
  providers:[MovieSearchService],
  bootstrap: [MovieSearchComponent]
})
export class AppModule { }
