import { NotFoundError } from './';

export const authenticateStaff = (req, res, next) => {
    if (!req.session.user) {
        return next(new NotFoundError('cookie not found', 401));
    }

    const { hash, type } = req.session.user;

    if (hash && type === 'staff') {
        next();
    } else {
        res.status(401).json({ message: 'authentication credentials are not valid' });
    }
};
