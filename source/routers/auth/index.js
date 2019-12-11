import { StaffController } from '../../controllers';

export const login = async (req, res) => {
    try {
        if (!req.headers.authorization) {
            throw new Error('credentials are not valid');
        }

        const [, credentials] = req.headers.authorization.split(' ');
        const [email, password] = Buffer.from(credentials, 'base64')
            .toString()
            .split(':');

        const staff = new StaffController({ email, password });
        const hash = await staff.login();

        req.session.user = { hash };
        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
