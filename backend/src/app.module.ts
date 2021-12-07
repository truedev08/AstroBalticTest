import { Module } from '@nestjs/common';
import { IsikukoodController } from './controllers/isikukood.controller';
import { IsikukoodService } from './services/isikukood.service';

@Module({
  imports: [],
  controllers: [IsikukoodController],
  providers: [IsikukoodService],
})
export class AppModule {}
