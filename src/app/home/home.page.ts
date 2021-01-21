import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  searchTitle = '';
  movieApiUrl = "http://www.omdbapi.com/?apikey=[yourKey]&t=star+wars&y=2017";
  movieData = {
    title: "",
    description: "",
    imageUrl: "",
  };

  constructor(public http: HttpClient) {
    this.readAPI(this.movieApiUrl).subscribe((data) => {
      console.log(data);
      this.movieData.title = data["Title"];
      this.movieData.description = data["Plot"];
      this.movieData.imageUrl = data["Poster"];
    });
  }

  readAPI(URL: string) {
    return this.http.get(URL);
  }

  searchMovie(){
    // encodeURIComponent me permet de convertir l'espace en %20 dans l'url
    const search = encodeURIComponent(this.searchTitle).trim();
    this.movieApiUrl = 'http://www.omdbapi.com/?apikey=[yourKey]&t=' + search ;
    this.readAPI(this.movieApiUrl).subscribe((data) => {
      console.log(data);
      this.movieData.title = data["Title"];
      this.movieData.description = data["Plot"];
      this.movieData.imageUrl = data["Poster"];
    });
  }
}
