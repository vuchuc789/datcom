import { DecodedIdToken } from 'firebase-admin/auth';
import { FieldValue } from 'firebase-admin/firestore';

export type User = {
  user: DecodedIdToken;
  role: role[];
  timestamp: FieldValue;
};

export enum role {
  READ_USER = 'read_user',
  WRITE_USER = 'write_user',
}
