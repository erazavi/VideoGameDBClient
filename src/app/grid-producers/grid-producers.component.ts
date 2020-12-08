import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-grid-producers',
  templateUrl: './grid-producers.component.html',
  styleUrls: ['./grid-producers.component.css']
})
export class GridProducersComponent implements OnInit {

  publisherData: Array<any>;

  constructor(private http: HttpClient) {
    this.publisherData = [];
  }

  async ngOnInit(): Promise<void> {
    this.http.get('https://vgdbnetcoreserver.azurewebsites.net/api/publishers').subscribe((data: any) => this.publisherData = data);
  }

}
