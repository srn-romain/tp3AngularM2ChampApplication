import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ActiviteService {
  objectifs: string[] = ['Finir le TP', 'Faire du sport'];

  removeItem(index: number): void {
    this.objectifs.splice(index, 1);
  }

  updateItem(index: number, newTitle: string): void {
    if (index >= 0 && index < this.objectifs.length) {
      this.objectifs[index] = newTitle;
    }
  }

  editItem(index: number, newTitle: string): void {
    this.updateItem(index, newTitle);
  }
}
