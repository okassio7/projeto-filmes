import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FilmesService } from '../services/filmes.service';
import { ResumoPipe } from '../pipes/resumo-pipe';
import { DestaqueDirective } from '../directives/destaque';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ResumoPipe,
    DestaqueDirective,
    RouterModule
  ]
})
export class HomePage implements OnInit {

  filmes: any[] = [];

  constructor(private filmesService: FilmesService) {}

  ngOnInit() {

    this.filmesService.getFilmes().subscribe((dados: any) => {
      this.filmes = dados;
    });

  }

}