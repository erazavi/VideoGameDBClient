import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-grid-videogames',
  templateUrl: './grid-videogames.component.html',
  styleUrls: ['./grid-videogames.component.css']
})
export class GridVideogamesComponent implements OnInit {

  gameData: Array<any>;

  constructor(private http: HttpClient) {
    this.gameData = [];
  }

  async ngOnInit(): Promise<void> {
    this.http.get('https://vgdbnetcoreserver.azurewebsites.net/api/VideoGames').subscribe((data: any) => this.gameData = data);
  }

}

