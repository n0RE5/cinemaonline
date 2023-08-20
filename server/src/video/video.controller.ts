import { Body, Controller, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { CreateVideoDto } from "./dto/create-video.dto";
import { VideoService } from "./video.service";
import { FilesInterceptor } from "@nestjs/platform-express";

@Controller('video')
export class VideoController {
    
    constructor(private videoService: VideoService) {}
    
    @Post('')
    @UseInterceptors(FilesInterceptor('files'))
    create(@Body() dto: CreateVideoDto, @UploadedFiles() files) {
        return this.videoService.create(dto, files)
    }

    @Get('id/:id')
    getById(@Param('id') id: number) {
        return this.videoService.getVideoById(id)
    }

    @Get('href/:href')
    getByLink(@Param('href') href: string)  {
        return this.videoService.getVideoByLink(href)
    }

    @Get('list/newest')
    getNewestList(@Query('limit') limit: number) {
        return this.videoService.getNewestList(limit)
    }

    @Get('list/type/:type')
    get(@Query('limit') limit: number, @Param('type') type: string) {
        return this.videoService.getTypeList(type, limit)
    }

    @Get('list/type/:type')
    getVideosByType(@Query('limit') limit: number, @Query('page') page: number, @Param('type') type: string) {
        return this.videoService.getVideosByType(type, limit, page)
    }
}
