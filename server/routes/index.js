const express = require("express");
const path = require('path');
const router = express.Router();
const companyRouter = require("./company");
const itemRouter = require("./item");

router.use('/', express.static(path.resolve('./dist')));
router.get('/api/items', [], itemRouter.getItems);
router.get('/api/companies', companyRouter.getCompanies);


module.exports = router;
