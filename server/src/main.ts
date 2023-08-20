import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"

const start = async () => {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {rawBody: true, bodyParser: true})
    app.enableCors({
        origin:`${process.env.CLIENT_URL}`,
        credentials: true,
        methods:'GET,PUT,POST,DELETE',
        exposedHeaders: 'x-total-count'
    });
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()