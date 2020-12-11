import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {stringify} from 'querystring';

@Component({
  selector: 'app-videogame-form',
  templateUrl: './videogame-form.component.html',
  styleUrls: ['./videogame-form.component.css']
})
export class VideogameFormComponent implements OnInit {

  constructor(private http: HttpClient, public fb: FormBuilder, private route: ActivatedRoute) {
    this.publisherData = [];
  }
  isSubmitted = false;
  publisherData: Array<any>;
  publisherId;
  data;
  gameId = '';
  isUpdate = false;

  videoGameForm = this.fb.group({
    gameName: ['', [Validators.required]],
    releaseDate: [''],
    publisher: ['', [Validators.required]]
  });

  // tslint:disable-next-line:typedef
  changePublisher(e) {
    console.log(e.target.value);
    this.publisher.setValue(e.currentTarget.value, {
        onlySelf: true
    });
    console.log(JSON.stringify(e.target.value));
    this.publisherId = parseInt((e.target.value).split(':')[1]);
  }

  // tslint:disable-next-line:typedef
  changeGameName(e){
    console.log(e.target.value);
    this.gameName.setValue(e.target.value, {
      onlySelf: true
    });
  }

  // tslint:disable-next-line:typedef
  changeReleaseDate(e){
    console.log(e.target.value);
    this.releaseDate.setValue(e.target.value, {
      onlySelf: true
    });
  }

  // tslint:disable-next-line:typedef
  get gameName(){
    return this.videoGameForm.get('gameName');
  }

  // tslint:disable-next-line:typedef
  get releaseDate(){
    return this.videoGameForm.get('releaseDate');
  }

  // tslint:disable-next-line:typedef
  get publisher(){
    return this.videoGameForm.get('publisher');
  }

  // tslint:disable-next-line:typedef

  onSubmit(): boolean {
    console.log(this.videoGameForm);
    if (!this.videoGameForm.valid){
      console.log('Invalid');
      return false;
    } else {
      console.log('Hi');
      alert(JSON.stringify(this.videoGameForm.value));

      if (this.releaseDate.value === ''){
        this.releaseDate.setValue(null);
      }

      if (this.isUpdate){
        const jsonRequest = {
          videoGameId: parseInt(this.gameId),
          name: this.gameName.value,
          publisherId: parseInt(this.publisherId),
          releaseDate: this.releaseDate.value
        };
        this.http.put('https://vgdbnetcoreserver.azurewebsites.net/api/videoGames/' + this.gameId,
          jsonRequest).subscribe();
      } else {
        const jsonRequest = {
          name: this.gameName.value,
          publisherId: parseInt(this.publisherId),
          releaseDate: this.releaseDate.value
        };
        this.http.post('https://vgdbnetcoreserver.azurewebsites.net/api/videoGames',
          jsonRequest).subscribe();
      }
    }
  }


  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.http.get('https://vgdbnetcoreserver.azurewebsites.net/api/publishers').subscribe((data: any) => {
      this.publisherData = data;
    });
    this.data = this.route.params.subscribe(params => { this.gameId = params['id']; });
    console.log(this.gameId);
    if (this.gameId !== undefined){
      this.isUpdate = true;
    }
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy(){
    this.data.unsubscribe();
  }
}

