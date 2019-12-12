import { StaffController, CustomersController } from '../../controllers';

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
        let hash = await staff.login();
        let userType = 'staff';

        if (!hash) {
            const customer = new CustomersController({ email, password });
            hash = await customer.login();
            userType = 'customer';
        }

        req.session.user = { hash, type: userType };
        res.sendStatus(204);
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};
