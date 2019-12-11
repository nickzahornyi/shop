import { CustomersController } from '../../controllers';

export const get = async (req, res) => {
    try {
        const { page = 1, size = 10 } = req.query;
        const model = new CustomersController({ page, size });
        const data = await model.getAll();

        res.status(200).json({ ...data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const post = async (req, res) => {
    try {
        const model = new CustomersController(req.body);
        const data = await model.create();

        res.status(201).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
