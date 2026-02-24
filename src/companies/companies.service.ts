import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CompaniesService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.company.findMany({ include: { owner: true } });
    }

    async findById(id: string) {
        return this.prisma.company.findUnique({
            where: { id },
            include: { owner: true, jobs: true, reviews: true },
        });
    }

    async findBySlug(slug: string) {
        return this.prisma.company.findUnique({
            where: { slug },
            include: { owner: true, jobs: true, reviews: true },
        });
    }

    async create(data: {
        name: string;
        slug: string;
        ownerId: string;
        description?: string;
        industry?: string;
        size?: string;
        location?: string;
        website?: string;
    }) {
        return this.prisma.company.create({ data });
    }
}
