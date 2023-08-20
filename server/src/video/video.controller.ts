import { Body, Controller, Get, Param, Post, Query, Response, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { CreateVideoDto } from "./dto/create-video.dto";
import { Response as Res } from 'express'
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

    @Get('search/:searchQuery')
    search(@Param('searchQuery') searchQuery: string, 
           @Query('limit') limit: number, 
           @Query('page') page: number,
           @Response() res: Res
    ) {
        
        return this.videoService.searchVideos(searchQuery, limit, page, res)
    }

    @Get('list/type/:type')
    get(@Query('limit') limit: number, @Param('type') type: string) {
        return this.videoService.getTypeList(type, limit)
    }

    @Get('type/:type')
    getVideosByType(@Query('limit') limit: number, @Query('page') page: number, @Param('type') type: string) {
        return this.videoService.getVideosByType(type, limit, page)
    }
}
