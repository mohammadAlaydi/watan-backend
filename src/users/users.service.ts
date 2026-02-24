import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findByClerkId(clerkId: string) {
        return this.prisma.user.findUnique({ where: { clerkId } });
    }

    async findById(id: string) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async create(data: {
        clerkId: string;
        email: string;
        firstName: string;
        lastName: string;
    }) {
        return this.prisma.user.create({ data });
    }

    async update(id: string, data: Partial<{ firstName: string; lastName: string; headline: string; bio: string; location: string; skills: string[]; profileImage: string }>) {
        return this.prisma.user.update({ where: { id }, data });
    }
}
