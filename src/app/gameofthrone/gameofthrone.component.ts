import { Component, OnInit } from '@angular/core';
import { GameofthroneService } from '../services/gameofthrone.service';

@Component({
  selector: 'app-gameofthrone',
  templateUrl: './gameofthrone.component.html',
  styleUrls: ['./gameofthrone.component.css']
})
export class GameofthroneComponent implements OnInit {

  constructor(private game:GameofthroneService) { }

  ngOnInit(): void {
    this.getGOT();
  }

  got:any;

  getGOT(){
    this.game.getGot().subscribe(resp=>{
      this.got=resp;
    });
  }

}
