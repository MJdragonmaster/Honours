const nedb = require('nedb');
var keys=0;

class subject {

        

        constructor(dbFilePath) {
                if (dbFilePath) {
                this.db = new nedb({ filename: dbFilePath, autoload: true });
                console.log('DB connected to ' + dbFilePath);
                } else {
                this.db = new nedb();
                }
                }

                getAllEntries() {
                        //return a Promise object, which can be resolved or rejected
                        return new Promise((resolve, reject) => {
                        //use the find() function of the database to get the data,
                        //error first callback function, err for error, entries for data
                        this.db.find({}, function(err, objectives) {
                            JSON.stringify(objectives);
                        //if error occurs reject Promise
                        if (err) {
                        reject(err);
                        //if no error resolve the promise & return the data
                        } else {
                        resolve(objectives);
                        //to see what the returned data looks like
                        //console.log('function all() returns: ', objectives);
                        }
                        })
                        })
                        }

                        removeEntries(id) {
                                this.db.remove({ _id: id}, {}, function(err, docsRem) {
                                    if (err) {
                                        console.log('error deleting document' + _id);
                                    } else {
                                        console.log(docsRem, 'document(s) removed from the database');
                                    }
                                })
                            }

                            base_subjects() {
                                console.log('db entry no1');
                                this.db.insert({
                                key: keys,
                                name: "Maths"
                                });

                                keys=keys++;
                                
                                this.db.insert({
                                        key: keys,
                                        name: "English"
                                });

                                keys=keys++;
                        
                                }

                                add_entry(name){
                                    var entry= {
                                        key: keys,
                                        name: name
                                    }
                                    this.db.insert(entry, function(err, doc) {
                                        if (err) {
                                        console.log('Error inserting document', name);
                                        } else {
                                        console.log('document inserted into the database', doc);
                                        }
                                        })
                                        } 
}
 

 module.exports = subject;