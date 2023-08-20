import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Video } from "./video.model";
import { FilesService } from "src/files/files.service";
import { CreateVideoDto } from "./dto/create-video.dto";
import * as uuid from 'uuid'
import {Response as Res} from 'express'
import { Op } from "sequelize";

@Injectable()
export class VideoService {
    constructor(@InjectModel(Video) private videoRepository: typeof Video, private fileService: FilesService) {}

    async create(dto: CreateVideoDto, files: any) {
        if (!files.length) {
            throw new HttpException('No files uploaded', HttpStatus.BAD_REQUEST)
        }
        const imageLink = await this.fileService.createFile(files[0], '.jpg')
        const videoLink = await this.fileService.createFile(files[1], '.mp4')
        const uniqueLink = uuid.v4()

        const video = await this.videoRepository.create({...dto, href: uniqueLink, video: videoLink, img: imageLink})
        return video
    }

    async getVideoById(id: number) {
        const video = await this.videoRepository.findOne({
            where: {id}
        })
        return video
    }

    async getVideoByLink(href: string) {
        const video = await this.videoRepository.findOne({
            where: {href}
        })
        return video
    }

    async searchVideos(searchQuery: string, limit: number, page: number, res: Res) {
        let offset = page * limit - limit
        const videos = await this.videoRepository.findAll({
            where: {title: { [Op.like]: '%' + searchQuery + '%' }},
            limit,
            offset,
        })
        
        const totalVideos = await this.videoRepository.count({
            where: {title: { [Op.like]: '%' + searchQuery + '%' }}
        })

        return res.set('x-total-count', totalVideos.toString()).json(videos)
    }

    async getNewestList(limit: number) {
        const videos = await this.videoRepository.findAll({
            limit,
            order: [ [ 'createdAt', 'DESC' ]]
        })
        return videos
    }

    async getTypeList(type: string, limit: number) {
        const videos = await this.videoRepository.findAll({
            where: {type},
            limit,
        })
    }

    async getVideosByType(type: string, limit: number, page: number) {
        let offset = page * limit - limit
        const videos = await this.videoRepository.findAll({
            where: {type},
            limit,
            offset,
        })
    }
}
