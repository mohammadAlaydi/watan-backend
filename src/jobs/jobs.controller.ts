import { Controller, Get, Param } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Jobs')
@Controller('jobs')
export class JobsController {
    constructor(private readonly jobsService: JobsService) { }

    @Get()
    async findAll() {
        return this.jobsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.jobsService.findById(id);
    }
}
