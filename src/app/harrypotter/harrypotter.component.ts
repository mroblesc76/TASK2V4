import { Component, OnInit } from '@angular/core';
import { HarrypotterService } from '../services/harrypotter.service';

@Component({
  selector: 'app-harrypotter',
  templateUrl: './harrypotter.component.html',
  styleUrls: ['./harrypotter.component.css']
})
export class HarrypotterComponent implements OnInit {

  constructor(private harryservice:HarrypotterService) {

   }

  ngOnInit(): void {
    this.getHouseHarryPotter();
  }

  hp:any;

  getHouseHarryPotter(){
    this.harryservice.getHouseHarryPotter().subscribe(resp=>{
      console.log(resp);
      this.hp=resp;

    })
  }

}
