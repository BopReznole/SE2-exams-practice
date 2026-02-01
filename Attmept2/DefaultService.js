var utils = require('../utils/writer.js');

'use strict';


/**
 * Delete an author
 *
 * authorId Long 
 * no response value expected for this operation
 **/
exports.authorsAuthorIdDELETE = function() {
  return new Promise(function(resolve, _) {
    resolve(utils.respondWithCode(204, {}));
  });
}


/**
 * Get details of a specific author
 *
 * authorId Long 
 * returns Author
 **/
exports.authorsAuthorIdGET = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an author
 *
 * body AuthorInput 
 * authorId Long 
 * returns Author
 **/
exports.authorsAuthorIdPUT = function(_,__) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all authors
 *
 * returns List
 **/
exports.authorsGET = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new author
 *
 * body AuthorInput 
 * returns Author
 **/
exports.authorsPOST = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "name" : "name",
      "id" : 0
    };
    resolve(utils.respondWithCode(201, examples['application/json']));
  });
}


/**
 * Delete a book
 *
 * bookId Long 
 * no response value expected for this operation
 **/
exports.booksBookIdDELETE = function() {
  return new Promise(function(resolve, _) {
    resolve(utils.respondWithCode(204, {}));
  });
}


/**
 * Get details of a specific book
 *
 * bookId Long 
 * returns Book
 **/
exports.booksBookIdGET = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a book
 *
 * body BookInput 
 * bookId Long 
 * returns Book
 **/
exports.booksBookIdPUT = function(_,__) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all books
 *
 * returns List
 **/
exports.booksGET = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
}, {
  "category_id" : 1,
  "published_year" : 5,
  "id" : 0,
  "title" : "title",
  "author_id" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new book
 *
 * body BookInput 
 * returns Book
 **/
exports.booksPOST = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "category_id" : 1,
      "published_year" : 5,
      "id" : 0,
      "title" : "title",
      "author_id" : 6
    };
    resolve(utils.respondWithCode(201, examples['application/json']));
  });
}


/**
 * Delete a category
 *
 * categoryId Long 
 * no response value expected for this operation
 **/
exports.categoriesCategoryIdDELETE = function() {
  return new Promise(function(resolve, _) {
    resolve(utils.respondWithCode(204, {}));
  });
}


/**
 * Get details of a specific category
 *
 * categoryId Long 
 * returns Category
 **/
exports.categoriesCategoryIdGET = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update a category
 *
 * body CategoryInput 
 * categoryId Long 
 * returns Category
 **/
exports.categoriesCategoryIdPUT = function(_,__) {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
  "name" : "name",
  "id" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all categories
 *
 * returns List
 **/
exports.categoriesGET = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new category
 *
 * body CategoryInput 
 * returns Category
 **/
exports.categoriesPOST = function() {
  return new Promise(function(resolve, _) {
    var examples = {};
    examples['application/json'] = {
      "name" : "name",
      "id" : 0
    };
    resolve(utils.respondWithCode(201, examples['application/json']));
  });
}