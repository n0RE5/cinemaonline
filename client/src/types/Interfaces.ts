export interface IVideoItem {
    href: string
    title: string
    img: string
}

const IVideoType = {
    film: "Фильм",
    series: "Сериал",
    anime: "Аниме"
} as const

export type IVideoType = typeof IVideoType[keyof typeof IVideoType]

const IVideoGenre = {
    horror: "Ужасы"
} as const

export type IVideoGenre = typeof IVideoGenre[keyof typeof IVideoGenre]

export interface IVideo {
    href: string
    img: string
    video: string
    title: string
    country: string
    genre: IVideoGenre
    year: number
    type: IVideoType
    translate: string
    quality: string
    director: string
}

export interface IBreadcrumb {
    title: string
    href?: string
}