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
      titre : "ANPS",
      icone : "logo-anps.svg",
      description : "Convertion du site web wordpress de l'association nationnal des podologues du sport en une application web fullstack. Réalisation de du projet avec le framework angular et symfony.",
      link : "https://anps-france.com/",
      date : "Fév. 2025",
    },
    {
      titre : "CLEVA",
      icone : "logo-cleva.png",
      description : "Conceptualisation et développement d'une solution web complète, comprenant une interface utilisateur et administrateur. L'application permet de gérer le parking de l'entreprise. Gestion des demande de stationnement, d'attribution de place automatique et manuel etc... Réalisation du projet avec le framework angular et Java springboot.",
      date : "Mai. 2024 - Juil. 2024",
    },
    {
      titre : "A fleur de peau",
      icone : "a-fleur-de-peau.svg",
      description : "Création d'une boutique e-commerce pour un salon de massage. Réalisation de du projet avec wordpress et le plugin woocommerce.",
      link : "https://afleurdepeau.eu/",
      date : "Fév. 2025",
    },
    {
      titre : "Noneo",
      icone : "noneo.svg",
      description : "Associé fondateur de Noneo. Noneo est une société de prestations numérique, nous nous chargons d'offrir à nos clients une présence sur internet en leurs créant des sites internet ou solution numérique adapté à tout leurs besoin",
      link : "https://noneo.fr",
      date : "Oct. 2023 - Juin 2024",
    },
    {
      titre : "Apprendre les sons",
      icone : "logo-lapin.png",
      description : "Interface utilisée en école maternelle permettant aux enfants d'apprendre les sons",
      link : "https://antoninmart.github.io/interface-image/",
      date : "Avr. 2024 - Maintenant",
    },
    {
      titre : "Site portfolio",
      icone : "portfolio.png",
      description : "Création / hébergement de mon site web portfolio. Réalisation du site avec le framework angular",
      link : "https://github.com/AntoninMart/my-portfolio",
      date : "Oct. 2023",
    },
    {
      titre : "Smash Hit",
      icone : "smash-hit.png",
      description : "Réalisation du site web du fast-food Smash Hit. Réalisation du site avec le framework angular",
      link : "https://antoninmart.github.io/smash-hit-website/",
      date : "Avr. 2023",
    },
    {
      titre : "Api Siren",
      icone : "arrow.png",
      description : "Réalisation d'une solution, permettant d'acquérir, stocker et garder à jour les données de l'API SIREN de l'INSEE. Intégration d'une nouvelle fonctionnalité dans le progiciel de l'entreprise permettant aux clients de pré-remplir ainsi que de vérifier les données renseignée dans la création d'un nouveau tiers.",
      date : "Avr. 2022",
    },
    {
      titre : "Dumbot",
      icone : "discord.svg",
      description : "Création d’un bot certifié par Discord. Ce dernier ayant rejoint plus de 250 communautés et ayant été utilisé par plus de 50.000 utilisateurs de la plateforme.",
      link : "https://top.gg/fr/bot/786972690405523518",
      date : "Sept. 2020 - Mars 2021",
    },
  ]
}
