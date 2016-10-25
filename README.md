Development API test server
===========================

API Node Server with Mongodb and Mongoose. Seed data to Mongodb from .json file
-------------------------------------------------------------------------------
you have mongodb and node installed on your system.git  


* npm install

* npm install -g node-mongo-seeds

* Run $ mongod (start mongodb server)

* Run $ seed (seed your mongodb with all your data from your /seeds folder)
    

    When you install the mongoose module by npm, it does not have a built bson module in it's folder. In the file node_modules/mongoose/node_modules/mongodb/node_modules/bson/ext/index.js, change the line
    
    bson = require('../build/Release/bson');
    to
    
    bson = require('bson');
    and then install the bson module using npm.

    **Note:** Every time you run $ seed it will blow away all the data in your collections and re-populate them with whatever is in your /seeds directory.


* npm start

* load page on http://localhost:5000/api/health-check

look in routes for other available APIs.
