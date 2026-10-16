import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ActiviteService } from '../services/activite/activite-service';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  nbItems: number = 0;
  btnText: string = 'ajout';
  objectifText: string = '';
  showForm: boolean = false;

  get objectifs(): string[] {
    return this.activiteService.objectifs;
  }

  constructor(
    public monRouteur: Router,
    public activiteService: ActiviteService
  ) {}

  ngOnInit(): void {
    this.nbItems = this.activiteService.objectifs.length;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  consulter(index: number): void {
    this.monRouteur.navigate(['/consultAct', index]);
  }

  ajoutItem(): void {
    if (this.objectifText.trim() !== '') {
      this.activiteService.objectifs.push(this.objectifText);
      this.nbItems = this.activiteService.objectifs.length;
      console.log('Objectifs :', this.activiteService.objectifs);
      this.objectifText = '';

      setTimeout(() => {
        this.monRouteur.navigate(['/about']);
      }, 1000);
    }
  }
}

