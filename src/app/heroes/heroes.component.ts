import {Component, OnInit } from '@angular/core';
import {NgFor} from '@angular/common';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  imports: [HeroDetailComponent, NgFor],
})
export class HeroesComponent {
  constructor(private heroService: HeroService, private messageService: MessageService) {}
  ngOnInit(): void {
  this.getHeroes();
}
  // heroes = HEROES;
  heroes: Hero[] = [];

  selectedHero!: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
     this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
