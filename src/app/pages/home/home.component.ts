import { Component, OnInit } from '@angular/core';
import { FormData } from '../../mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: FormData = {
    fromModel: 'одностороняя',
    fromToModel: 'двустороняя',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
