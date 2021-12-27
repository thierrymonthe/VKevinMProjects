import { Component, OnInit } from '@angular/core';
import data from '../../../data/servicetype.json';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent implements OnInit {
  public servicetype = data;
  constructor() { }

  ngOnInit(): void {
  }

}
