import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReviewsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.review.findMany({
            where: { status: 'PUBLISHED' },
            include: { company: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findByCompany(companyId: string) {
        return this.prisma.review.findMany({
            where: { companyId, status: 'PUBLISHED' },
            include: { author: { select: { id: true, firstName: true, lastName: true, profileImage: true } } },
            orderBy: { createdAt: 'desc' },
        });
    }

    async create(data: {
        rating: number;
        title: string;
        content: string;
        authorId: string;
        companyId: string;
        isAnonymous?: boolean;
    }) {
        return this.prisma.review.create({ data });
    }
}
