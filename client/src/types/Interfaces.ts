export interface IVideoItem {
    href: string
    title: string
    img: string
}

const IVideoType = {
    film: "Фильм",
    series: "Сериал",
    anime: "Аниме",
    cartoon: "Мультфильм"
} as const

export type IVideoType = typeof IVideoType[keyof typeof IVideoType]

export interface IVideo {
    href: string
    img: string
    video: string
    title: string
    country: string
    genre: string
    year: number
    type: IVideoType
    translate: string
    quality: string
    description: string
    director: string
}

export interface IBreadcrumb {
    title: string
    href?: string
}