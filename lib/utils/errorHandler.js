/*!
 * json-query-builder
 * Copyright(c) 2021 Ilter Alkan
 * Copyright(c) 2013 CloddleDEVS
 * ISC Licensed
 */

'use strict'

/**
 * Module dependencies.
 */

const chalk = require('chalk');

const errorHandler = {
    ERRinsertTargetNull: function() {
        console.log(chalk.red('JQB ERROR: INSERT target can\'t be null.'))
    },
    ERRinsertDataNull: function() {
        console.log(chalk.red('JQB ERROR: INSERT data can\'t be null.'))
    },
    ERRselectTargetNull: function() {
        console.log(chalk.red('JQB ERROR: SELECT target can\'t be null.'))
    },
    ERRupdateTargetNull: function() {
        console.log(chalk.red('JQB ERROR: UPDATE target can\'t be null.'))
    },
    ERRupdateSelectRowNull: function() {
        console.log(chalk.red('JQB ERROR: UPDATE select row can\'t be null.'))
    },
    ERRupdateDataNull: function() {
        console.log(chalk.red('JQB ERROR: UPDATE data can\'t be null.'))
    },
    ERRdeleteTargetNull: function() {
        console.log(chalk.red('JQB ERROR: DELETE target can\'t be null.'))
    },
    ERRdeleteRowNull: function() {
        console.log(chalk.red('JQB ERROR: DELETE rows can\'t be null.'))
    },
    ERRinsertDataNotObject: function() {
        console.log(chalk.red('JQB ERROR: SELECT data must be object.'))
    },
    ERRdropTargetNull: function() {
        console.log(chalk.red('JQB ERROR: DROP target can\'t be null.'))
    },
    ERRcreatePathExist: function() {
        console.log(chalk.ornage('JQB ERR: CREATE path is already exist!'))
    }
}

module.exports = errorHandler