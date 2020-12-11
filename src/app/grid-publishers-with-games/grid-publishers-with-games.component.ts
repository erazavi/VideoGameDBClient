import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-grid-publishers-with-games',
  templateUrl: './grid-publishers-with-games.component.html',
  styleUrls: ['./grid-publishers-with-games.component.css']
})
export class GridPublishersWithGamesComponent implements OnInit {

  publisherData: Array<any>;

  constructor(private http: HttpClient) {
    this.publisherData = [];
  }

  async ngOnInit(): Promise<void> {
    this.http.get('https://vgdbnetcoreserver.azurewebsites.net/api/PublisherWithVideoGames')
      .subscribe((data: any) => this.publisherData = data);
  }

  // tslint:disable-next-line:typedef
  getVideoGames(obj){
    return obj.get('videoGames');
  }
}
