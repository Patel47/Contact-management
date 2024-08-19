const express = require('express');
const {getAllContact,
    createContact,
    getContact,
    updateContact,
    deleteContact} = require('../controller/contactController');
const validateToken = require('../middleware/validateTokenHandler');

const router = express.Router();

router.use(validateToken)
router.get('/', getAllContact)
router.post('/', createContact)
router.get('/:id', getContact)
router.put('/:id', updateContact)
router.delete('/:id', deleteContact);

module.exports = router;