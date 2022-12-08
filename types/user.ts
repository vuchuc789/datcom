import { DecodedIdToken } from 'firebase-admin/auth';
import { FieldValue } from 'firebase-admin/firestore';

export type User = {
  user: DecodedIdToken;
  permission: permission[];
  timestamp: FieldValue;
};

export enum permission {
  READ_USER = 'read_user',
  WRITE_USER = 'write_user',
}
