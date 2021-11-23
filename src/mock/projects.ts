import ErpProject from '../components/Projects/erpProject';
import FinEtudeProject from '../components/Projects/FinEtudeProject';
import NuitDeLinfoProject from '../components/Projects/NuitDeLinfoProject';
import PatrimoineProject from '../components/Projects/PatrimoineProject';
import SmartServiceProject from '../components/Projects/SmartServiceProject';
import screenErp from '../images/screen_erp.png';

export interface ProjectInfo {
    title: string;
    subTitle: string;
    languages: string[];
    imageUrl: any,
}

export interface Project {
    projectInfo: ProjectInfo,
    component: (props: any) => JSX.Element
}

export const erpInfo: ProjectInfo = {
    title: "Application de gestion de stock et comptabilité",
    subTitle: "ERP à destination des associations étudiante",
    languages: ["React", "TypeScript",  "NodeJs", "Fastify", "Prisma"],
    imageUrl: screenErp,
}

export const nuitDeLinfoInfo: ProjectInfo = {
    title: "Nuit de l'info 20221",
    subTitle : "A venir ... compétition développement",
    languages: [],
    imageUrl: "https://pbs.twimg.com/media/FDXXXtOWQAEmXVg.png"
}

export const patrimoineInfo: ProjectInfo = {
    title: "Application de gestion de patrimoine",
    subTitle: "Mise en pratique de la méthode TDD",
    languages: ["Client lourd WinForm", ".NET Framework 5.0",  "xUnit", "C#"],
    imageUrl: "https://cdn.pixabay.com/photo/2017/10/25/19/45/piggy-bank-2889042_960_720.jpg"
}

export const SmartServiceInfo: ProjectInfo = {
    title: "[Incotec] SmartService",
    subTitle : "Application mobile de gestion des temps",
    languages: ["Ionic", "Typescript", "C#", "Google Play Console", "App Store Connect"],
    imageUrl: "https://www.incotec-software.com/sites/default/files/2021-02/visuel-ecran-chargement.png"
}

export const PushNotificationInfo: ProjectInfo = {
    title: "[Incotec] Notification Push Server",
    subTitle : "Développement d'un système de notification pour l'application mobile",
    languages: ["NodeJS", "API REST"],
    imageUrl: "https://cdn.pixabay.com/photo/2021/02/11/11/30/computer-6005017_960_720.png"    
}

export const FinEtudeInfo: ProjectInfo = {
    title: "[Incotec] Développement d'un nouveau module Incovar+",
    subTitle : "Projet de fin d'étude (sujet de mémoire)",
    languages: ["C#", "Typescript", "Angular"],
    imageUrl: "https://cdn.pixabay.com/photo/2016/09/16/19/16/hat-1674894_960_720.png"    
}

export const projectList : Project[] =[
    {
        projectInfo: SmartServiceInfo,
        component: SmartServiceProject
    },
    {
        projectInfo: erpInfo,
        component: ErpProject
    },
    {
        projectInfo: patrimoineInfo,
        component: PatrimoineProject
    },
    {
        projectInfo: nuitDeLinfoInfo,
        component: NuitDeLinfoProject
    },
    {
        projectInfo: FinEtudeInfo,
        component: FinEtudeProject
    }
];