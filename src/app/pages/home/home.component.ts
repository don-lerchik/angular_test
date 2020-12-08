import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormData } from '../../mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dataLink: FormData = {
    fromModel: 'одностороняя',
    fromToModel: 'двустороняя',
  };
  selectedUnit = '';
  unitList: string[] = ['килограмм', 'грамм', 'метр', 'километр', 'сантимерт', 'милиметр'];
  constructor() { }

  ngOnInit(): void {
  }

}
