import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [TasksModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
