import mongoose from 'mongoose';

import { users } from './base';

const staff = users.discriminator(
    'staff',
    new mongoose.Schema(
        {
            role: String,
            disabled: Boolean,
        },
        { discriminatorKey: 'model' },
    ),
);

export { staff };
