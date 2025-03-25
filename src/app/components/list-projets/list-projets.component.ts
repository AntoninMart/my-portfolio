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
      description : "Conversion du site web WordPress de l'association nationnale des podologues du sport en une application web fullstack. Réalisation du projet avec le framework Angular et symfony.",
      link : "https://anps-france.com/",
      date : "Fév. 2025",
    },
    {
      titre : "A fleur de peau",
      icone : "a-fleur-de-peau.svg",
      description : "Création d'une boutique e-commerce pour un salon de massage. Réalisation du projet avec wordpress et le plug-in woocommerce.",
      link : "https://afleurdepeau.eu/",
      date : "Fév. 2025",
    },
    {
      titre : "Noneo",
      icone : "noneo.svg",
      description : "Fondateur associé de Noneo, société de prestations numériques ayant pour mission d'offrir des solutions web (création de sites internet notamment) et numériques aux clients.",
      link : "https://noneo.fr",
      date : "Oct. 2023 - Juin 2024",
    },
    {
      titre : "Apprendre les sons",
      icone : "logo-lapin.png",
      description : "Interface permettant d'apprendre les sons aux enfants, outil employé en école maternelle.",
      link : "https://antoninmart.github.io/interface-image/",
      date : "Avr. 2024 - Maintenant",
    },
    {
      titre : "Site portfolio",
      icone : "portfolio.png",
      description : "Création / hébergement de mon site web portfolio. Réalisation du site avec le framework Angular.",
      link : "https://github.com/AntoninMart/my-portfolio",
      date : "Oct. 2023",
    },
    {
      titre : "Smash Hit",
      icone : "smash-hit.png",
      description : "Réalisation du site web du fast-food Smash Hit. Réalisation du site avec le framework Angular.",
      link : "https://antoninmart.github.io/smash-hit-website/",
      date : "Avr. 2023",
    },
    {
      titre : "Dumbot",
      icone : "discord.svg",
      description : "Création d’un bot certifié par Discord. Ce dernier ayant rejoint plus de 250 communautés et ayant été utilisé par plus de 50.000 utilisateurs de la plateforme.",
      link : "https://top.gg/fr/bot/786972690405523518",
      date : "Sept. 2020 - Mars 2021",
    },
  ]

  public projetsEntreprise = [
    {
      titre : "CLEVA",
      icone : "logo-cleva.png",
      description : "Conceptualisation et développement d'une solution web complète, proposant une interface utilisateur et administrateur, permettant la gestion des flux automobiles sur le parking de l'entreprise. L'application assiste la gestion des demandes de stationnement, et attribue une place de parking automatiquement ou manuellement à l'utilisateur. Projet réalisé avec le framework Angular et Java Springboot.",
      date : "Mai 2024 - Juil. 2024",
      link : null,
    },
    {
      titre : "Api Siren",
      icone : "arrow.png",
      description : "Réalisation d'une solution permettant d'acquérir, stocker et garder à jour les données de l'API SIREN de l'INSEE. Intégration d'une nouvelle fonctionnalité dans le progiciel de l'entreprise permettant aux clients de pré-remplir ainsi que de vérifier les données renseignées dans la création d'un nouveau tiers.",
      date : "Avr. 2022",
      link : null,
    },
  ]
}
