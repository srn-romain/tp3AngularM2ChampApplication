import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ActiviteService } from '../services/activite/activite-service';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements OnInit {
  objectifs: string[] = [];

  constructor(
    public activiteService: ActiviteService,
    private monRouteur: Router
  ) {}

  ngOnInit(): void {
    this.objectifs = this.activiteService.objectifs;
  }

  consulter(index: number): void {
    this.monRouteur.navigate(['/consultAct', index]);
  }
}
