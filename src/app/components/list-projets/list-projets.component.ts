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
      icone : "spider-web.svg",
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
    {
      titre : "Stageo",
      icone : "browser.svg",
      description : "Projet web ayant pour but de gérer des offres / candidatures de stage. Framework bootstrap pour la partie front HP pour la partie back,",
      link : "https://github.com/AntoninMart/Stageo",
    },
    {
      titre : "EasySave",
      icone : "browser.svg",
      description : "Logiciel de sauvegarde(copie de fichier) réalisé en CSharp. IHM Console, IHM en WPF MultiThreading des différentes sauvegardes",
      link : "",
    },
    {
      titre : "Projet Siren",
      icone : "browser.svg",
      description : "Logiciel permettant de récupérer / gérer / distruber les données de l'api insee siren Ajout de ma fonctionnalité dans la progiciel de l'entreprise Projet réalisé avec : C#, Api Rest, VBnet, SqlServer",
      link : "",
    },
    {
      titre : "Projet C++",
      icone : "browser.svg",
      description : "Interface windows form permettant la gestion / traitement d'une base de données",
      link : "https://github.com/AntoninMart/Projet-POO/tree/main/Project1",
    },
    {
      titre : "Projet Worldwide Weather Watcher",
      icone : "browser.svg",
      description : "Projet système embarqué, Station météo en Arduino",
      link : "",
    },
  ]
}
