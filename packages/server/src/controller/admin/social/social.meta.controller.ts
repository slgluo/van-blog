import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SocialDto, SocialType } from 'src/dto/social.dto';
import { AdminGuard } from 'src/provider/auth/auth.guard';
import { MetaProvider } from 'src/provider/meta/meta.provider';
@ApiTags('social')
@UseGuards(AdminGuard)
@Controller('/api/admin/meta/social')
export class SocialMetaController {
  constructor(private readonly metaProvider: MetaProvider) {}

  @Get()
  async get() {
    const data = await this.metaProvider.getSocials();
    return {
      statusCode: 200,
      data,
    };
  }
  @Get('/types')
  async getTypes() {
    const data = await this.metaProvider.getSocialTypes();
    return {
      statusCode: 200,
      data,
    };
  }

  @Put()
  async update(@Body() updateDto: SocialDto) {
    const data = await this.metaProvider.addOrUpdateSocial(updateDto);
    return {
      statusCode: 200,
      data,
    };
  }

  @Post()
  async create(@Body() updateDto: SocialDto) {
    const data = await this.metaProvider.addOrUpdateSocial(updateDto);
    return {
      statusCode: 200,
      data,
    };
  }

  @Delete('/:type')
  async delete(@Param('type') type: SocialType) {
    const data = await this.metaProvider.deleteSocial(type);
    return {
      statusCode: 200,
      data,
    };
  }
}