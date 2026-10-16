import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActiviteService } from '../services/activite/activite-service';

@Component({
  selector: 'app-consult-activite',
  imports: [FormsModule],
  templateUrl: './consult-activite.html',
  styleUrl: './consult-activite.css',
})
export class ConsultActivite implements OnInit {
  id: string = '';
  param2: string = '';
  activite: string = '';
  nouvelleActivite: string = '';
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public activiteService: ActiviteService
  ) {}

  supprimeElem(index: number = Number(this.id)): void {
    this.activiteService.removeItem(index);
    this.router.navigate(['']);
  }

  activerEdition(): void {
    this.nouvelleActivite = this.activite;
    this.isEditing = true;
  }

  sauvegarder(): void {
    if (this.nouvelleActivite.trim() !== '') {
      const index = Number(this.id);
      this.activiteService.updateItem(index, this.nouvelleActivite);
      this.activite = this.nouvelleActivite;
    }
    this.isEditing = false;
  }

  retour(): void {
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.param2 = params['param2'];
      if (this.id !== undefined && this.id !== '') {
        const index = Number(this.id);
        this.activite = this.activiteService.objectifs[index] ?? '';
        this.nouvelleActivite = this.activite;
      }
    });
  }
}
