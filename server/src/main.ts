import { NestFactory } from "@nestjs/core"
import { DocumentBuilder } from "@nestjs/swagger"
import { AppModule } from "./app.module"
import { raw } from "express"

const start = async () => {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {rawBody: true, cors: true, bodyParser: true})

    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()