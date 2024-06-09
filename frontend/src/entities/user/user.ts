import { UserRoles } from '../../app/config';

export interface User {
  email: string;
  role: UserRoles;
  createdAt: Date;
}
