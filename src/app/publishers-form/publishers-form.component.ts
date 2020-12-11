import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-publishers-form',
  templateUrl: './publishers-form.component.html',
  styleUrls: ['./publishers-form.component.css']
})
export class PublishersFormComponent implements OnInit {
  private publisherId: any;
  private data: any;
  isUpdate = false;

  constructor(private http: HttpClient, public fb: FormBuilder, private route: ActivatedRoute) {
  }

  publisherForm = this.fb.group({
    publisher: ['', [Validators.required]],
    country: [''],
  });

  // tslint:disable-next-line:typedef
  changePublisher(e) {
    console.log(e.target.value);
    this.publisher.setValue(e.currentTarget.value, {
      onlySelf: true
    });
  }

  changeCountry(e) {
    console.log(e.target.value);
    this.country.setValue(e.currentTarget.value, {
      onlySelf: true
    });
  }

  // tslint:disable-next-line:typedef
  get publisher(){
    return this.publisherForm.get('publisher');
  }

  get country(){
    return this.publisherForm.get('country');
  }

  ngOnInit(): void {
    this.data = this.route.params.subscribe(params => { this.publisherId = params['id']; });
    console.log(this.publisher);
    if (this.publisherId !== undefined){
      this.isUpdate = true;
    }
  }

  onSubmit(): boolean {
    console.log(this.publisherForm);
    if (!this.publisherForm.valid){
      console.log('Invalid');
      return false;
    } else {
      console.log('Hi');
      alert(JSON.stringify(this.publisherForm.value));

      if (this.isUpdate){
        const jsonRequest = {
          publisherId: parseInt(this.publisherId),
          name: this.publisher.value,
          country: this.country.value
        };
        this.http.put('https://vgdbnetcoreserver.azurewebsites.net/api/Publishers/' + this.publisherId,
          jsonRequest).subscribe();
      } else {
        const jsonRequest = {
          name: this.publisher.value,
          country: this.country.value
        };
        this.http.post('https://vgdbnetcoreserver.azurewebsites.net/api/Publishers',
          jsonRequest).subscribe();
      }
    }
  }

  // tslint:disable-next-line:typedef use-lifecycle-interface
  ngOnDestroy(){
    this.data.unsubscribe();
  }

}
