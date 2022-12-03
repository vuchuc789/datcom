import type { NextApiRequest, NextApiResponse } from 'next';
import { UserGetResponse } from '../../types/userApi';
import { getAuth } from '../../utils/firebaseAdmin';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<UserGetResponse>
) => {
  try {
    const idToken = req.headers.authorization?.startsWith('Bearer ')
      ? req.headers.authorization.split(' ')[1]
      : undefined;

    if (!idToken) {
      res.status(401).json({ error: 'Unauthorized' });

      return;
    }

    const auth = await getAuth();

    const decodedToken = await auth.verifyIdToken(idToken);

    res.status(200).json({ data: decodedToken });
  } catch (e) {
    res.status(500).json({ error: e as string });
  }
};

export default handler;
