// import jwt from "jsonwebtoken";

// import { getPassword } from "../../utils/env";

// const password = getPassword();

export const login = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(500).json({ message: 'some server error' });
    }
};

export const logout = (req, res) => {
    try {
        res.sendStatus(204);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
