import { Component, OnInit } from '@angular/core';
import { AtmospherePlayService } from '../atmosphere-play.service';

@Component({
  selector: 'app-atomsphere-play',
  templateUrl: './atomsphere-play.component.html',
  styleUrls: ['./atomsphere-play.component.css']
})
export class AtomspherePlayComponent implements OnInit {
  atmospherePlayService: AtmospherePlayService;

  constructor(atmospherePlayService: AtmospherePlayService) {
    this.atmospherePlayService = atmospherePlayService;
  }

  ngOnInit(): void {
  }

  async onClick() {
    await this.atmospherePlayService.push();
  }

}
