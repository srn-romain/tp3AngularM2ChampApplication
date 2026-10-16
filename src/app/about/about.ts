import { Component, OnInit } from '@angular/core';
import { ActiviteService } from '../services/activite/activite-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  objectifs: string[] = [];

  constructor(public activiteService: ActiviteService) {}

  ngOnInit(): void {
    this.objectifs = this.activiteService.objectifs;
  }
}
