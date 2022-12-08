import { FieldValue } from 'firebase-admin/firestore';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ApiResponse, collection, method } from '../../types/api';
import { permission, User } from '../../types/user';
import { getAuth, getDb } from '../../utils/firebaseAdmin';

const post = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<User>>
) => {
  const idToken = req.headers.authorization?.startsWith('Bearer ')
    ? req.headers.authorization.split(' ')[1]
    : undefined;

  if (!idToken) {
    res.status(401).json({ code: 401, message: 'Unauthorized' });

    return;
  }

  const auth = await getAuth();

  const decodedToken = await auth.verifyIdToken(idToken);

  const db = await getDb();

  const userRef = db.collection(collection.USER).doc(decodedToken.uid);

  const user: User = {
    user: decodedToken,
    permission: [permission.READ_USER],
    timestamp: FieldValue.serverTimestamp(),
  };

  await userRef.set(user, { merge: true });

  res.status(200).json({ code: 200, message: 'Ok', data: user });
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse<User>>
) => {
  try {
    switch (req.method) {
      case method.POST:
        post(req, res);
        break;
      default:
        res.status(404).json({ code: 404, message: 'Not Found' });
    }
  } catch (e) {
    res.status(500).json({ code: 500, message: 'Internal Server Error' });
  }
};

export default handler;
