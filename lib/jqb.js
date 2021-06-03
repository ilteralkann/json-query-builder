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
import fs from 'fs';
import errorHandler from './utils'

//
const jqb = {
    json: "",
    insert: function(jsonTarget,insertData) {
        fs.readFile(jsonTarget, 'utf-8', (err, data) =>{
            if (err) throw err;

            let jsonData = [JSON.parse(data)]

            if (jsonTarget) {
                if (insertData) {
                    jsonData.push(insertData);
    
                    fs.writeFileSync(jsonTarget,JSON.stringify(jsonData), function(e) {
                        if (err) throw err;
                    });
                } else {
                    errorHandler.ERRinsertDataNull();
                }
            } else {
                errorHandler.ERRinsertTargetNull();
            }

        });
    },
    select: function(jsonTarget, selectedPart) {
        let jsonData = JSON.parse(fs.readFileSync(jsonTarget, 'utf-8'));

        if (jsonTarget) {
            if (selectedPart) {
                console.log(selectedPart)
                return jsonData[selectedPart]
            } else {
                return jsonData
            }
        } else {
            errorHandler.ERRselectTargetNull();
        }

    },
    update: function(jsonTarget, selectedRow, updateData) {
        let jsonData = JSON.parse(fs.readFileSync(jsonTarget, 'utf-8'));

        if (jsonTarget) {

            if (selectedRow) {
                
                if (updateData) {
                    jsonData[selectedRow] = updateData

                    fs.writeFileSync(jsonTarget,JSON.stringify(jsonData), function(e) {
                        if (err) throw err;
                    });
                } else {
                    errorHandler.ERRupdateDataNull();
                }

            } else {
                errorHandler.ERRupdateSelectRowNull();
            }

        } else {
            errorHandler.ERRupdateTargetNull();
        }

    },
    delete: function(jsonTarget, selectedRow) {
        let jsonData = JSON.parse(fs.readFileSync(jsonTarget, 'utf-8'));

        if (jsonTarget) {
            if (selectedRow) {
                delete jsonData[selectedRow];

                fs.writeFileSync(jsonTarget,JSON.stringify(jsonData), function(e) {
                    if (err) throw err;
                });
            } else {
                errorHandler.ERRdeleteRowNull();
            }

        } else {
            errorHandler.ERRdeleteTargetNull()
        }
    }
}

module.exports = jqb;