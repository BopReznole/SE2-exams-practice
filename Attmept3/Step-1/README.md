# Step 1

- Ανοιγεις DefaultService.js
	- προσθετεις στο resolve() εκεινα που γραφει μεσα με το σωστο statusCode και example αν εχει (που ειναι αυτο που επιστρεφουν τα apis, πχ:
	```js
	var utils = require('../utils/writer.js');

	// DELETE - should return 204 No Content
	exports.authorsAuthorIdDELETE = function() {
	return new Promise(function(resolve, ) {
		resolve(utils.respondWithCode(204, {}));
	});
	}

	// POST - should return 201 Created
	exports.authorsPOST = function() {
	return new Promise(function(resolve, ) {
		var examples = { /* ... / };
		resolve(utils.respondWithCode(201, examples['application/json']));
	});
	}

	// GET - can return 200 or 404
	exports.authorsAuthorIdGET = function(authorId) {
	return new Promise(function(resolve, _) {
		var examples = { / ... */ };
		if (Object.keys(examples).length > 0) {
		resolve(utils.respondWithCode(200, examples['application/json']));
		} else {
		resolve(utils.respondWithCode(404, { error: "Author not found" }));
		}
	});
	}
	```
