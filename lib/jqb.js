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

//
const jqb = {
    json: "",
    insert: function(insertData) {
        fs.readFile(this.json, 'utf-8', (err, data) =>{
            if (err) throw err;

            let JSONdata = [JSON.parse(data)]
            
            JSONdata.push(insertData);

                fs.writeFileSync(this.json,JSON.stringify(JSONdata), function(e) {
                    if (err) throw err;
                });
        });
    },
    select: function(jsonTarget, selectedPart) {
        let jsonData = JSON.parse(fs.readFileSync(jsonTarget, 'utf-8'));

        if (selectedPart) {
            console.log(selectedPart)
            return jsonData[selectedPart]
        } else {
            return jsonData
        }

    }
}

module.exports = jqb;