import $api from "."
import { IVideo } from "../types/Interfaces"

export const getVideoByLink = async (href: string): Promise<IVideo> => {
    const response = await $api.get(`video/href/${href}`)
    return response.data
}

export const getNewestList = async (limit: number): Promise<IVideo[]> => {
    const response = await $api.get(`video/list/newest?limit=${limit}`)
    return response.data
}

export const searchVideos = async(searchQuery: string, limit: number, page: number) => {
    const response = await $api.get(`video/search/${searchQuery}?limit=${limit}&page=${page}`)
    return response
}