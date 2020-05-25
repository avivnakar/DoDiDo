const logger = require('../../services/logger.service')
const boardService = require('./board.service')

// TODO: needs error handling! try, catch

async function getBoards(req, res) {
    try {
        const boards = await boardService.query(req.query)
        res.send(boards)
    } catch (err) {
        logger.error('Cannot get boards', err);
        res.status(500).send({ error: 'cannot get boards' })

    }
}

async function getBoard(req, res) {
    try {
        const boards = await boardService.getById(req.params.id)
        res.send(boards)
    } catch (err) {
        logger.error('Cannot get boards', err);
        res.status(500).send({ error: 'cannot get boards' })

    }
}

async function updateBoard(req, res) {
    try {
        const board = req.body;
        await boardService.update(board)
        res.send(board)
    } catch (err) {
        logger.error('Cannot update board', err);
        res.status(500).send({ error: 'cannot update board' })
    }

}
async function deleteBoard(req, res) {
    try {
        await boardService.remove(req.params.id)
        res.end()
    } catch (err) {
        logger.error('Cannot delete board', err);
        res.status(500).send({ error: 'cannot delete board' })
    }
}

async function addBoard(req, res) {
    try {
        var board = req.body;
        // board.createdBy = {
        //     _id: req.session.user._id,
        //     fullName: req.session.user.fullName,
        //     imgUrl: req.session.user.imgUrl
        // }
        board = await boardService.add(board)
        res.send(board)
    } catch (err) {
        logger.error('Cannot add board', err);
        res.status(500).send({ error: 'cannot add board' })
    }
}

module.exports = {
    getBoards,
    getBoard,
    addBoard,
    updateBoard,
    deleteBoard
}