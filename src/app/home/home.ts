import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActiviteService } from '../services/activite/activite-service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
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
    private monRouteur: Router,
    public activiteService: ActiviteService
  ) {}

  ngOnInit(): void {
    this.nbItems = this.activiteService.objectifs.length;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
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

