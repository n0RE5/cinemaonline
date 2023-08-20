import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { VideoController } from "./video.controller";
import { FilesModule } from "src/files/files.module";
import { AuthModule } from "src/auth/auth.module";
import { VideoService } from "./video.service";
import { Video } from "./video.model";


@Module({
  providers: [VideoService],
  controllers: [VideoController],
  imports: [
    SequelizeModule.forFeature([Video]),
    AuthModule,
    FilesModule,
  ],
})
export class VideoModule {}
