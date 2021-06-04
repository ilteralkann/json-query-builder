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
import errorHandler from './utils/errorHandler'

//
const jqb = {
    json: "",
    insert: function(jsonTarget,insertData) {
        fs.readFile(jsonTarget, 'utf-8', (err, data) =>{
            if (err) throw err;

            let jsonData = [JSON.parse(data)]

            if (jsonTarget) {
                if (insertData) {
                    if (typeof(insertData) == 'object') {
                        jsonData.push(insertData);
    
                        fs.writeFileSync(jsonTarget,JSON.stringify(jsonData), function(e) {
                            if (err) throw err;
                            return true
                        });
                    } else {
                        errorHandler.ERRinsertDataNotObject();
                        return false
                    }

                } else {
                    errorHandler.ERRinsertDataNull();
                    return false
                }
            } else {
                errorHandler.ERRinsertTargetNull();
                return false
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
            return false
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
                        return true
                    });
                } else {
                    errorHandler.ERRupdateDataNull();
                    return false
                }

            } else {
                errorHandler.ERRupdateSelectRowNull();
                return false
            }

        } else {
            errorHandler.ERRupdateTargetNull();
            return false
        }

    },
    delete: function(jsonTarget, selectedRow) {
        let jsonData = JSON.parse(fs.readFileSync(jsonTarget, 'utf-8'));

        if (jsonTarget) {
            if (selectedRow) {
                delete jsonData[selectedRow];

                fs.writeFileSync(jsonTarget,JSON.stringify(jsonData), function(e) {
                    if (err) throw err;
                    return true
                });
            } else {
                errorHandler.ERRdeleteRowNull();
                return false
            }

        } else {
            errorHandler.ERRdeleteTargetNull()
            return false
        }
    },
    drop: function(jsonTarget) {
        if (jsonTarget) {
            fs.unlink(jsonTarget, (err) => {
                if (err) throw err;
                return true
            })
        } else {
            errorHandler.ERRdeleteTargetNull();
            return false
        }

    },
    create: function(createPath, jsonData) {
        if (fs.existsSync(createPath)) {
            errorHandler.ERRcreatePathExist();
            return false
        } else {
            fs.writeFile(createPath, jsonData, function (err) {
                if (err) throw err;
                return true
              });
        }
    }
    // TODO: ADD JOIN FUNCTION.
}

module.exports = jqb;