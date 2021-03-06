const express = require('express')
const { requireAuth } = require('../../middlewares/requireAuth.middleware')
const { getBoards, getBoard, addBoard, updateBoard, deleteBoard } = require('./board.controller')
const router = express.Router()

// middleware that is specific to this router
// router.use(requireAuth)

// router.get('/', requireAuth, getBoards)
// router.get('/:id', requireAuth, getBoard)
// router.post('/', requireAuth, addBoard)
// router.put('/:id', requireAuth, updateBoard)
// router.delete('/:id', requireAuth, deleteBoard)
router.get('/',  getBoards)
router.get('/:id',  getBoard)
router.post('/', addBoard)
router.put('/:id',  updateBoard)
router.delete('/:id', deleteBoard)

module.exports = router