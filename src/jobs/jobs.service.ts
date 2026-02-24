import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class JobsService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.job.findMany({
            where: { status: 'ACTIVE' },
            include: { company: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findById(id: string) {
        return this.prisma.job.findUnique({
            where: { id },
            include: { company: true, postedBy: true },
        });
    }

    async create(data: {
        title: string;
        description: string;
        companyId: string;
        postedById: string;
        type?: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'FREELANCE' | 'REMOTE' | 'INTERNSHIP';
        location?: string;
        salaryMin?: number;
        salaryMax?: number;
        requirements?: string[];
    }) {
        return this.prisma.job.create({ data });
    }
}
