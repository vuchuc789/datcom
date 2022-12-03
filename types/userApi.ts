import { DecodedIdToken } from 'firebase-admin/auth';

export type UserGetResponse = {
  data?: DecodedIdToken;
  error?: string;
};
