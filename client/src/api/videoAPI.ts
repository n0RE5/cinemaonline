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