import mongoose from 'mongoose';

import { addHash } from '../plugins';

const schema = new mongoose.Schema(
    {
        name: {
            first: {
                type: String,
                minlength: 2,
                maxlength: 15,
                required: true,
            },
            last: {
                type: String,
                minlength: 2,
                maxlength: 15,
                required: true,
            },
        },
        emails: [
            {
                email: {
                    type: String,
                    unique: true,
                    required: true,
                    match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
                },
                primary: Boolean,
            },
        ],
        phones: [
            {
                phone: {
                    type: String,
                    required: true,
                },
                primary: Boolean,
            },
        ],
        password: {
            type: String,
            select: false,
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
        discriminatorKey: 'model',
    },
);

schema.index(
    {
        'name.first': 1,
        'name.last': 1,
    },
    {
        name: 'flName',
    },
);

schema.plugin(addHash, { index: true });

const users = mongoose.model('users', schema);

users.createIndexes();

export { users };
