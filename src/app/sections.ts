export interface Section {
    id?: number
    name: string
    routerLink: string 
    active: boolean
}

export const SECTIONS: Section[] = [
    {
        name: 'Inicio', routerLink: '/', active: true
    },
    {
        name: 'Acerca de mí', routerLink: '/about-me', active: false
    }
] 