export interface Home {
    bannerSrc: string,
    title: string,
    subtitle: string,
    description: string
}

export interface AboutMe {
    pictureSrc: string,
    description: string,
    cv: string
}

export interface Skill {
    id?: number,
    name: string,
    percentage: number
}

export interface SkillTab {
    id?: number,
    title: string,
    iconClass: string,
    skills: Skill[],
    open: boolean
}

export interface Qualification {
    id?: number,
    title: string,
    subtitle: string,
    beginning: string,
    end: string,
    pictureUrl: string
}

export interface QualificationTab {
    id?: number,
    name: string,
    items: Qualification[]
}

export interface Project {
    id?: number,
    title: string,
    beginning: string,
    end: string,
    description: string,
    link: string,
    pictureUrl: string
}

export interface Contact {
    email: string,
    location: string
}

export interface Footer {
    title: string,
    subtitle: string,
    copy: string
}

export interface User {
    id?: number,
    username: string,
    password: string
}