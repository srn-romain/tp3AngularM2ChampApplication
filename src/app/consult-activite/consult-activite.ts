import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consult-activite',
  imports: [],
  templateUrl: './consult-activite.html',
  styleUrl: './consult-activite.css',
})
export class ConsultActivite implements OnInit {
  id: string = '';
  param2: string = '';

  constructor(private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    this.param2 = this.route.snapshot.params['param2'];
  }

  ngOnInit(): void {}
}
