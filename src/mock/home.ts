import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaBrush, FaGraduationCap } from "react-icons/fa";
import { GiRead } from "react-icons/gi";
import { IoTrailSign } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { RiBearSmileFill, RiTeamFill } from "react-icons/ri";
import { TiThList } from "react-icons/ti";

export const homeData: any = {
    title: "Chef de projet IT",
    subtitle: "Étude, conception, développement et intégration de solutions informatiques",
    presentation_title: "Bonjour, je suis Marion !",
    presentation: "Actuellement en dernière année d'école d'ingénieurs, forte de mes 3 années d'expérience chez un éditeur de logiciels, je suis à l'écoute des opportunités.",
    presentation_end: "Je vous invite à découvrir mon univers, mes projets et les solutions que je pourrais apporter à votre entreprise.",
    qualities_title:"Ce que j'ai à vous apporter",
    qualities: [
        {
            icon:FaBrush,
            title: "Créativité",
            description: "Design d'application web et mobile, ergonomie, UI/UX",
        },
        {
            icon: TiThList,
            title: "Méthodes",
            description: "Clean code, TDD, Unified Process",
        },
        {
            icon: GiRead,
            title: "Volonté d'apprendre",
            description: "Qualité d'écoute, curiosité",
        },
        {
            icon: IoTrailSign,
            title: "Flexibilité/Adaptabilité",
            description: "Connaissance technique très générale, auto-formation",
        },
        {
            icon: RiTeamFill,
            title: "Esprit d'équipe",
            description: "« Aucun d’entre nous n’est plus intelligent que l’ensemble d’entre nous. »",
        },
        {
            icon: RiBearSmileFill,
            title: "Optimisme",
            description: "Enthousiasme, résilience",
        }
    ],

    course_title: "Mon parcours",
    course : [
        {
            time:"Depuis 2 ans",
            time_desc:"avril 2019 - aujourd'hui",
            icon: MdWork,
            location:"Incotec",
            description: [
                {
                    date: "En cours :",
                    text: "Gestion d'un projet Informatique, développement d'un nouveau module intégré à Incovar+ (projet de fin d'études).",
                    skills: ["Analyse concurrentielle", "Recueil du besoin", "Relation client", "Spécifications", "Méthodologies Gestion de Projet"],
                },
                {
                    date: "2020 - 2021 :",
                    text: "Responsable de la réécriture d'une application mobile existante (gestion des temps).",
                    skills: ["Développements mobile", "Management", "Analyse fonctionnelle", "UI/UX", "Analyse technique", "Mise en production"],
                    button: {
                        href: "https://www.incotec-software.com/actualite/smartservice-la-seule-application-mobile-dediee-la-gestion-des-temps-de-travail-et-des",
                        icon: BsBoxArrowUpRight,
                        text: "Voir l'article d'incotec"
                    },
                },
                {
                    date: "2019 :",
                    text: "Développement d'un module de note de frais au sein d'une application web existante.",
                    skills: ["Développements web", "Autonomie"]
                },
            ]
        },
        {
            time:"3 ans",
            time_desc: "septembre 2019 - diplômée en juillet 2022",
            icon: FaGraduationCap,
            location:"Diplôme d'Ingénieur",
            description: [
                {
                    date: "",
                    text: "Conservatoire National des Arts et Métiers, spécialité Informatique, en partenariat avec l'ITII Alsace.",
                    skills: []
                },
                {
                    date: "",
                    text: "Reconnu par la Commission des Titres d'Ingénieur.",
                    skills: [],
                    button: {
                        href: "https://www.francecompetences.fr/recherche/rncp/18275/",
                        icon: BsBoxArrowUpRight,
                        text: "Titre RNCP"
                    },
                },
                {
                    date: "",
                    text: "Méthodologie de gestion de projet (gestion des risques, qualité), Management, Economie, Conceptions et Développements avancés, Système et Réseau.",
                    skills: []
                },
            ]
        },
        {
            time:"2 ans",
            time_desc: "2017 - 2019",
            icon: FaGraduationCap,
            location:"Diplôme Universtaire Technologique",
            description: [
                {
                    date: "",
                    text: "IUT Robert-Schuman",
                    skills: []
                },
                {
                    date: "",
                    text: "Formation d'informatique généraliste : Conception et de réalisation de programmes informatiques, administration réseaux, gestion de bases",
                    skills: []
                },
            ]
        }
    ]

}