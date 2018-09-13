import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  users: Object;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => this.users = params.id);
   }

  ngOnInit() {
    this.data.getUser(this.users).subscribe(data => this.users = data);
  }

}
