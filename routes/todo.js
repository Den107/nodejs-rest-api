const {Router} = require('express')
const router = Router()

//get todos list
router.get('/', (req, res) => {
    res.json({a: 1})
})

//create new todos
router.post('/', (req, res) => {

})

//change todos
router.put('/:id', (req, res) => {

})

//delete todos
router.delete('/:id', (req, res) => {

})

module.exports = router