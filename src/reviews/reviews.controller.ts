import { Controller, Get, Param } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewsController {
    constructor(private readonly reviewsService: ReviewsService) { }

    @Get()
    async findAll() {
        return this.reviewsService.findAll();
    }

    @Get('company/:companyId')
    async findByCompany(@Param('companyId') companyId: string) {
        return this.reviewsService.findByCompany(companyId);
    }
}
