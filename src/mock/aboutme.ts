import { FaAngular,FaDatabase,FaHandshake,FaReact } from "react-icons/fa";
import { BsBoxArrowUpRight, BsCalendarFill } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { HiPresentationChartLine } from "react-icons/hi";
import { SiAdobeillustrator, SiAdobephotoshop, SiAndroid, SiAndroidstudio, SiApple, SiAzuredevops, SiCsharp, SiDotNet, SiGit, SiGnubash, SiIonic, SiIos, SiJavascript, SiLinux, SiMaterialdesign, SiMicrosoftoffice, SiTypescript, SiVisualstudio, SiWindows } from "react-icons/si";
import { RiQuestionnaireFill, RiThumbDownFill } from 'react-icons/ri';

import musique from '../images/musique.jpg';
import sport from '../images/sport.jpg';
import association from '../images/association.jpg';
import voyage from '../images/voyage.jpg';

export const aboutData: any = {
    title: "Cher lecteur, chère lectrice, je suis Marion,",
    presentation : "Mon aventure tech démarre en 2017, fascinée par le développement des applications web et mobile. " +
    "Mêlant curiosité et rigueur, je découvre un domaine vaste laissant ma créativité pleinement s'exprimer. "+
    "Je poursuis alors en école d'ingénieurs, en alternance, avec l’intention d'en apprendre plus. Mon plaisir à créer des sites web grandit et laisse place à "+
    "l'étude, la conception et le développement de solutions à destination des professionnels. "+
    "L'alternance est une expérience professionnelle et humaine grandement enrichissante. Elle m'a permis de gagner "+
    "en assurance tout en gardant l'envie de me remettre en question. Qui plus est, ma motivation à l'idée "+
    "de démarrer une nouvelle aventure n'en est que grandi, tout comme mon intérêt pour ce milieu qui me passionne. ",
    end_presentation: "Je suis prête et me réjouis de mener à bien vos projets !",

    skills_title: "Compétences & savoir-faire",
    lang_title : "Langues",
    lang: [
        {
            title: "Français :",
            text: "Langue maternelle"
        },
        {
            title: "Anglais :",
            text: "TOEIC blanc 950/990"
        }
    ],

    skills:[
        {
            title: "Gestion de projet",
            items: [
                {
                    title: "UI/UX",
                    icon: SiMaterialdesign
                },
                {
                    title: "Recueil du besoin",
                    icon: RiQuestionnaireFill
                },
                {
                    title: "Relation client",
                    icon: FaHandshake
                },
                {
                    title: "Elaboration spécifications",
                    icon: AiOutlineEdit
                },
                {
                    title: "Evaluation des risques",
                    icon: RiThumbDownFill
                },
                {
                    title: " Etablissement du planning ",
                    icon: BsCalendarFill
                },
                {
                    title: "Animation des réunions",
                    icon: HiPresentationChartLine
                }
            ]
        },
        {
            title: "Développements",
            items: [
                {
                    title: "Javascript",
                    icon: SiJavascript
                },
                {
                    title: "TypeScript",
                    icon: SiTypescript
                },
                {
                    title: "C#",
                    icon: SiCsharp
                },
                {
                    title: "bash",
                    icon: SiGnubash
                },
                {
                    title: "SQL",
                    icon: FaDatabase
                },
                {
                    title: "Angular",
                    icon: FaAngular
                },
                {
                    title: "React",
                    icon: FaReact
                },
                {
                    title: "Ionic",
                    icon: SiIonic
                },
                {
                    title: "ASP.NET",
                    icon: SiDotNet
                }
            ]
        },
        {
            title: "Outils",
            items: [
                {
                    title: "Git",
                    icon: SiGit
                },
                {
                    title: "DevOps",
                    icon: SiAzuredevops
                },
                {
                    title: "Visual Studio",
                    icon: SiVisualstudio
                },
                {
                    title: "Android Studio",
                    icon: SiAndroidstudio
                },
                {
                    title: "Photoshop",
                    icon: SiAdobephotoshop
                },
                {
                    title: "Illustrator",
                    icon: SiAdobeillustrator
                },
                {
                    title: "Office",
                    icon: SiMicrosoftoffice
                }
            ]
        },
        {
            title: "Systèmes",
            items: [
                {
                    title: "Android",
                    icon: SiAndroid
                },
                {
                    title: "iOS",
                    icon: SiIos
                },
                {
                    title: "Windows",
                    icon: SiWindows
                },
                {
                    title: "macOS",
                    icon: SiApple
                },
                {
                    title: "Linux",
                    icon: SiLinux
                }
            ]
        }
    ],

    xp: [
        {
            title: "Expériences Professionnelles",
            detail: [
                {
                    title:"Apprentie ingénieur",
                    date: "Depuis le 1 septembre 2019",
                    location: "Incotec",
                    desc: [
                        {
                            text: "Responsable de la réécriture d'une application web en application mobile Android et iOS disponible sur Google Play et l'App Store (Ionic, ASP.NET MVC).",
                            detail: "Amélioration de l'interface utilisateur (ergonomie et design), développement de nouvelles fonctionnalités (mode déconnecté, notifications mobiles via serveur push...), orcherstration d'une phase de test, mise en production."
                        },
                        {
                            text: "<strong>[en cours]</strong> Projet de fin d'étude : développement d'un nouveau module intégré au logiciel Incovar+.",
                            detail: "Phase d'analyse : étude de la concurrence, analyse du besoin, animation des réunions, relations clients, "+ 
                            "élaboration du cahier des charges fonctionnels et techniques. <br/>"+
                            "Phase de conception : UX/UI, ergonomie <br/>"+
                            "Phase de développement : réalisation et gestion<br/>"
                        }
                    ]
                },
                {
                    title:"Développeuse",
                    date: "juillet-août 2019",
                    location: "Incotec",
                    desc: [
                        {
                            text: "Développement d'un mode déconnecté (ASP.NET MVC, AngularJS) : nécessite le stockage de " +
                            "l'application web et des modules concernées sur le navigateur pour une utilisation en l'absence de connexion internet.."
                        },
                    ]
                },
                {
                    title:"Stage de développement",
                    date: "avril à juin 2019",
                    location: "Incotec",
                    desc: [
                        {
                            text: "Développement d'un module de note de frais au sein d'une application web (ASP.NET MVC, AngularJS). "
                        },
                    ]
                }
            ]
        },
        {
            title: "Formations",
            detail: [
                {
                    title:"Diplôme d'ingénieur",
                    date: "2019 - diplômée en Juillet 2022",
                    location: "Conservatoire National des Arts et Métiers, spécialité Informatique, en partenariat avec l'ITII Alsace.",
                    desc: [
                        {
                            text: "Reconnu par la Commission des Titres d'Ingénieur.",
                            button : {
                                href: "https://www.francecompetences.fr/recherche/rncp/18275/",
                                text: "Titre RNCP",
                                icon: BsBoxArrowUpRight
                            }
                        },
                    ]
                },
                {
                    title:"Diplôme Universtaire Technologique",
                    date: "2017-2019",
                    location: "IUT Robert-Schuman",
                    desc: [
                        {
                            text: "Formation d'informatique généraliste.",
                        },
                    ]
                },
                {
                    title:"Baccalauréat général spécialité Scientifique option Informatique et Sciences du numérique",
                    date: "2014-2017",
                    location: "Lycée Schurée",
                    desc: [
                        {
                            text: "Obtenu avec mention bien.",
                        },
                    ]
                }
            ]
        }
    ],

    interest_title: "Centres d'intérêts",
    interests: [
        {
            img: musique,
            title: "Musique",
            text: "Chanteuse, guitariste, solo, en groupe, divers concerts depuis mon adolescence"
        },
        {
            img: sport,
            title: "Sport",
            text: "Randonnée, musculation, course à pied"
        },
        {
            img: voyage,
            title: "Voyage",
            text: "Soif d'aventure"
        },
        {
            img: association,
            title: "Monde associatif",
            text: "Membre du Bureau des Etudiants en IUT et école d'ingénieurs et " +
            "du Conseil d'administration d'Elektron Prod (association musicale) pendant 2 ans"
        },
    ]
}