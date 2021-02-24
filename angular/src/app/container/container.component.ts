import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  vet_mac: string[];
  constructor() {
  this.vet_mac = ['a', 'b', 'c', 'd'];
  }

  ngOnInit(){
  }

}
