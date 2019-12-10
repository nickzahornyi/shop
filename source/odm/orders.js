import mongoose from 'mongoose';

import { customers, products } from './';

const schema = new mongoose.Schema(
    {
        uid: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: customers,
            validate: [
                async function(value) {
                    const data = await customers.findOne({ _id: value });

                    return Boolean(data);
                },
                'Customer with such id - {VALUE} was not found in customers collection',
            ],
        },
        pid: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: products,
            validate: [
                async function(value) {
                    const data = await products.findOne({ _id: value });

                    return Boolean(data);
                },
                'Product with such id - {VALUE} was not found in products collection',
            ],
        },
        count: {
            type: String,
            required: true,
            min: 1,
        },
        comment: {
            type: String,
            required: true,
            maxlength: 250,
        },
    },
    {
        timestamp: {
            createdAt: 'created',
            updatedAt: 'modified',
        },
    },
);

const orders = mongoose.model('orders', schema);

export { orders };
