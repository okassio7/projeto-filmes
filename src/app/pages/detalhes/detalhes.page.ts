import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule, Location } from '@angular/common';
import { FilmesService } from '../../services/filmes.service';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class DetalhesPage implements OnInit {

  filme: any;

  constructor(
    private route: ActivatedRoute,
    private filmesService: FilmesService,
    private location: Location
  ) {}

  voltar() {
    this.location.back();
  }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    this.filmesService.getFilmes().subscribe((dados: any) => {

      this.filme = dados.find((f: any) => f.id === id);

    });

  }

}