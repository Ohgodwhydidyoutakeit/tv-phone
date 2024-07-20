import { Module } from '@nestjs/common';
import { MouseService } from './mouse.service';

@Module({
  providers: [MouseService]
})
export class MouseModule {}
