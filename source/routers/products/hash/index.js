import { ProductsController } from '../../../controllers';

export const getByHash = async (req, res) => {
    try {
        const { hash } = req.params;
        const model = new ProductsController({ hash });
        const data = await model.getByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateByHash = async (req, res) => {
    try {
        const { hash } = req.params;
        const model = new ProductsController({ hash, payload: req.body });
        const data = await model.updateByHash();

        res.status(200).json({ data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteByHash = async (req, res) => {
    try {
        const { hash } = req.params;
        const model = new ProductsController({ hash });

        await model.removeByHash();

        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
