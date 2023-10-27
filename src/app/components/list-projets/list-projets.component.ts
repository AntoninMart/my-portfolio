import { Component } from '@angular/core';

@Component({
  selector: 'app-list-projets',
  templateUrl: './list-projets.component.html',
  styleUrls: ['./list-projets.component.scss']
})
export class ListProjetsComponent {
  constructor() { }
  public projets = [
    {
      titre : "Noneo",
      icone : "noneo.svg",
      description : "Associé fondateur de Noneo. Noneo est une société de prestations numérique, nous nous chargons d'offrir à nos clients une présence sur internet en leurs créant des sites internet ou solution numérique adapté à tout leurs besoin",
      link : "https://noneo.fr",
      color : "green",
    },
    {
      titre : "Site portfolio",
      icone : "portfolio.png",
      description : "Création / hébergement de mon site web portfolio. Réalisation du site avec le framework angular",
      link : "https://github.com/AntoninMart/my-portfolio",
      color : "yellow",
    },
    {
      titre : "Dumbot",
      icone : "discord.svg",
      description : "Création d’un bot certifié par Discord. Ce dernier ayant rejoint plus de 250 communautés et ayant été utilisé par plus de 50.000 utilisateurs de la plateforme.",
      link : "https://top.gg/fr/bot/786972690405523518",
      color : "indigo",
    },
    {
      titre : "Smash Hit",
      icone : "smash-hit.png",
      description : "Réalisation du site web du fast-food Smash Hit. Réalisation du site avec le framework angular",
      link : "https://antoninmart.github.io/smash-hit-website/",
      color : "red",
    },
  ]
}
