import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MEAN';
  tasks = [];
  //a: string
  b = [];
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getTaskFromService()
  }
  getTaskFromService(){
    let observable = this._httpService.getTasks()
    observable.subscribe(data =>{
      //console.log("congrats! got data!",data)
      this.tasks = data['tasks'];
      //console.log(data.data)
      this.b = data.data
      //console.log(data.data[0].description)
      //this.a = data.data[0].description
    })
  }
}
