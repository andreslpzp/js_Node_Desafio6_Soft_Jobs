// middlewares/validate.js
function validateUser(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email y contraseña son requeridos' });
    }
    next();
}

module.exports = { validateUser };