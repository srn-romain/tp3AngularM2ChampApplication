import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  nbItems: number = 0;
  btnText: string = 'Ajouter un item';
  objectifText: string = 'mon nouveau objectif';
  objectifs: string[] = [];

  ngOnInit(): void {
    this.nbItems = this.objectifs.length;
  }

  ajoutItem(): void {
    if (this.objectifText.trim() !== '') {
      this.objectifs.push(this.objectifText);
      this.nbItems = this.objectifs.length;
      console.log('Objectifs :', this.objectifs);
      this.objectifText = '';
    }
  }
}

