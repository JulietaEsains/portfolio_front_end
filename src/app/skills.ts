export interface Skill {
    id?: number
    name: string
    percentage: number
}

export interface SkillTab {
    id?: number
    title: string
    iconClass: string
    skills: Skill[]
    open: boolean
}

export const SKILLTABS: SkillTab[] = [
    {title: 'Desarrollo Front End', iconClass: 'uil uil-brackets-curly',
        skills: [
            {name: 'HTML', percentage: 75},
            {name: 'CSS', percentage: 80},
            {name: 'JavaScript', percentage: 65},
            {name: 'Angular', percentage: 75},
            {name: 'React', percentage: 75}
        ],
        open: false
    },
    {title: 'Desarrollo Back End', iconClass: 'uil uil-server-alt',
        skills: [
            {name: 'Java', percentage: 85},
            {name: 'Spring Boot', percentage: 55},
            {name: 'MySQL', percentage: 60},
            {name: 'UML', percentage: 90},
            {name: 'Ruby on Rails', percentage: 70}
        ],
        open: false
    },
    {title: 'Habilidades blandas', iconClass: 'uil uil-user-arrows',
        skills: [
            {name: 'Trabajo en equipo', percentage: 60},
            {name: 'Organización', percentage: 85},
            {name: 'Manejo del tiempo', percentage: 70},
            {name: 'Resolución de problemas', percentage: 75}
        ],
        open: false
    },
    {title: 'Otras', iconClass: 'uil uil-nerd',
        skills: [
            {name: 'Inglés', percentage: 80},
            {name: 'Lunacy', percentage: 55}
        ],
        open: false
    }
]