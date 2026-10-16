import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite/activite-service';

@Component({
  selector: 'app-consult-activite',
  imports: [],
  templateUrl: './consult-activite.html',
  styleUrl: './consult-activite.css',
})
export class ConsultActivite implements OnInit {
  id: string = '';
  param2: string = '';
  activite: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public activiteService: ActiviteService
  ) {}

  supprimeElem(index: number = Number(this.id)): void {
    this.activiteService.removeItem(index);
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.param2 = params['param2'];
      if (this.id !== undefined && this.id !== '') {
        const index = Number(this.id);
        this.activite = this.activiteService.objectifs[index] ?? '';
      }
    });
  }
}
