import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {

  constructor(private _service: CrudService) { }

  ngOnInit(): void {
  }
  removelessonData(data,index) {
    if(window.confirm('Are you sure?')) {
        // this._service.(data._id).subscribe((data) => {
        //   this.lessonData.posts.splice(index, 1);
        // }
      // )    
    }
  }
}
