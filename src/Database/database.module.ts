import {Module} from "@nestjs/common";
import {databaseProvider} from "./database.providers";

@Module({
    components: [...databaseProvider],
    exports: [...databaseProvider],
})

export class DatabaseModule{}