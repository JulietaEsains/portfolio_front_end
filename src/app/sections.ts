export interface Section {
    id?: number
    name: string
    routerLink: string 
}

export const SECTIONS: Section[] = [
    {name: 'Inicio', routerLink: '/'},
    {name: 'Acerca de mí', routerLink: '/about-me'},
    {name: 'Habilidades', routerLink: '/skills'},
    {name: 'Habilitación', routerLink: '/qualification'},
    {name: 'Contacto', routerLink: '/contact'}
] 