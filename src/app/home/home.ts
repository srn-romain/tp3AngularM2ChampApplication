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
  btnText: string = 'ajout';
  objectifText: string = '...';
  objectifs: string[] = ['Finir le TP', 'Faire du sport'];
  showForm: boolean = false;

  ngOnInit(): void {
    this.nbItems = this.objectifs.length;
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
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

