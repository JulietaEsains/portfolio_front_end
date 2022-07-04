export interface Section {
    id?: number
    name: string
    routerLink: string 
}

export const SECTIONS: Section[] = [
    {
        name: 'Inicio', routerLink: '/'
    },
    {
        name: 'Acerca de mí', routerLink: '/about-me'
    }
] 