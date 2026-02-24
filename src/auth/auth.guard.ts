import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { createClerkClient } from '@clerk/backend';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthGuard implements CanActivate {
    private clerk;

    constructor(private configService: ConfigService) {
        this.clerk = createClerkClient({
            secretKey: this.configService.get<string>('CLERK_SECRET_KEY'),
        });
    }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            throw new UnauthorizedException('Missing or invalid authorization header');
        }

        const token = authHeader.split(' ')[1];

        try {
            const { sub: userId } = await this.clerk.verifyToken(token);
            request.userId = userId;
            return true;
        } catch {
            throw new UnauthorizedException('Invalid token');
        }
    }
}
