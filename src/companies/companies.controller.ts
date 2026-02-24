import { Controller, Get, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
    constructor(private readonly companiesService: CompaniesService) { }

    @Get()
    async findAll() {
        return this.companiesService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.companiesService.findById(id);
    }
}
