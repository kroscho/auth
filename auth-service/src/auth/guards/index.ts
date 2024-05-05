import { JwtAuthGuard } from './jwtAuth.guard';
import { RolesGuard } from './roles.guard';

export const GUARDS = [JwtAuthGuard, RolesGuard];
