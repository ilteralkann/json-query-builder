const jqb = require('../lib/jqb')

jqb.drop('./test.json')

/*
jqb.insert('test.json', ({
    "x":"2"
})) // Inserts obj to JSON.


 jqb.select("json path") // Returns selected JSON (FULL DATA)
 jqb.select("json path", "users12") // Returns selected JSON in "user12" value.
 
jqb.update('test.json', 'testss', 'TESTASADAsss') // Updates selected paths, selected value.


jqb.delete('./test.json','test2') // Deletes selected files selected row.
*/

