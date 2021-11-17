const Kontak = require('../models/Kontak')

const index = async (req, res, next) => {
    try {
        const kontak = await Kontak.findAll();
        res.send(kontak);
    } catch (err) {
        console.log(err);
    }
}

const create = async(req, res, next) => {
    try {
        await Kontak.create(req.body);
        res.json({
            "message": "Kontak Created"
        });
    } catch (err) {
        console.log(err);
    }
}

const update = async(req, res, next) => {
    try {
        await Kontak.update(req.body, {
            where: {
                id: req.query.id
            }
        });
        res.json({
            "message": "Kontak Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

const destroy = async(req, res, next) => {
    try {
        await Kontak.destroy({
            where: {
                id: req.query.id
            }
        });
        res.json({
            "message": "Kontak Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    index,
    create,
    update,
    destroy
}