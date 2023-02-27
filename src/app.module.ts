import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmConfigService } from './database/typeorm-config';
import { ServicosModule } from './servicos/servicos.module';
import { UsuarioPlataformaModule } from './usuario-plataforma/usuario-plataforma.module';
import { AuthModule } from './auth/auth.module';
import { DiariasModule } from './diarias/diarias.module';
import { UsuarioApiModule } from './usuario-api/usuario-api.module';
import { MailModule } from './commom/mail/mail.module';
import { PasswordResetModule } from './password-reset/password-reset.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    ServicosModule,
    UsuarioPlataformaModule,
    AuthModule,
    DiariasModule,
    UsuarioApiModule,
    MailModule,
    PasswordResetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
