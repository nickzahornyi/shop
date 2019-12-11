import { CustomersController } from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const { hash } = req.params;
        const model = new CustomersController({ hash });
        const data = await model.getByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateByHash = async (req, res) => {
    try {
        const { hash } = req.params;
        const model = new CustomersController({ hash, payload: req.body });
        const data = await model.updateByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const removeByHash = async (req, res) => {
    try {
        const { hash } = req.params;
        const model = new CustomersController({ hash });

        await model.removeByHash();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
