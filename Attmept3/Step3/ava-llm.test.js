import http from 'node:http'; // Import the built-in Node.js HTTP module
import test from 'ava'; // Import AVA for running tests
import got from 'got'; // Import the `got` library for making HTTP requests

const baseURL = 'https://virtserver.swaggerhub.com/STRIKOSK_1/exams/1.0.0'; // Base URL for the API

// Test case: Get all books
test('GET /books should return a list of books', async t => {
	// Make a GET request to /books
	const response = await got(`${baseURL}/books`);

	// Assert that the response status code is 200
	t.is(response.statusCode, 200);

	// Assert that the response body is an array
	t.true(Array.isArray(JSON.parse(response.body)));
});

// Test case: Add a new book
test('POST /books should create a new book', async t => {
	const newBook = { title: 'Sample Book', author_id: 1, category_id: 1, published_year: 2023 };

	// Make a POST request to /books to create a new book
	const response = await got.post(`${baseURL}/books`, {
		json: newBook, // Send the new book as JSON
		responseType: 'json' // Expect a JSON response
	});

	// Assert that the response status code is 201 (Created)
	t.is(response.statusCode, 201);

	// Assert that the created book's title matches the input
	t.is(response.body.title, newBook.title);
});

// Test case: Get details of a specific book
test('GET /books/{bookId} should return a specific book', async t => {
	const bookId = 1; // Assume we have a book with ID 1

	// Make a GET request to retrieve the specific book
	const response = await got(`${baseURL}/books/${bookId}`);

	// Assert that the response status code is 200
	t.is(response.statusCode, 200);

	// Assert that the book ID in the response matches the requested ID
	t.is(response.body.id, bookId);
});

// Test case: Update a specific book
test('PUT /books/{bookId} should update a specific book', async t => {
	const bookId = 1; // Assume the book to update
	const updatedBook = { title: 'Updated Sample Book', author_id: 1, category_id: 1, published_year: 2024 };

	// Make a PUT request to update the specific book
	const response = await got.put(`${baseURL}/books/${bookId}`, {
		json: updatedBook,
		responseType: 'json'
	});

	// Assert that the response status code is 200
	t.is(response.statusCode, 200);

	// Assert that the updated book's title matches the new title
	t.is(response.body.title, updatedBook.title);
});

// Test case: Delete a specific book
test('DELETE /books/{bookId} should delete a specific book', async t => {
	const bookId = 1; // Assume the book to delete

	// Make a DELETE request to remove the specific book
	const response = await got.delete(`${baseURL}/books/${bookId}`);

	// Assert that the response status code is 204 (No Content)
	t.is(response.statusCode, 204);
});

// Test case: Get all authors
test('GET /authors should return a list of authors', async t => {
	const response = await got(`${baseURL}/authors`);

	t.is(response.statusCode, 200);
	t.true(Array.isArray(JSON.parse(response.body)));
});

// Test case: Add a new author
test('POST /authors should create a new author', async t => {
	const newAuthor = { name: 'Sample Author' };

	const response = await got.post(`${baseURL}/authors`, {
		json: newAuthor,
		responseType: 'json'
	});

	t.is(response.statusCode, 201);
	t.is(response.body.name, newAuthor.name);
});

// Test case: Get details of a specific author
test('GET /authors/{authorId} should return a specific author', async t => {
	const authorId = 1; // Assume the author ID is 1

	const response = await got(`${baseURL}/authors/${authorId}`);

	t.is(response.statusCode, 200);
	t.is(response.body.id, authorId);
});

// Test case: Update a specific author
test('PUT /authors/{authorId} should update a specific author', async t => {
	const authorId = 1; // Assume the author to update
	const updatedAuthor = { name: 'Updated Sample Author' };

	const response = await got.put(`${baseURL}/authors/${authorId}`, {
		json: updatedAuthor,
		responseType: 'json'
	});

	t.is(response.statusCode, 200);
	t.is(response.body.name, updatedAuthor.name);
});

// Test case: Delete a specific author
test('DELETE /authors/{authorId} should delete a specific author', async t => {
	const authorId = 1; // Assume the author to delete

	const response = await got.delete(`${baseURL}/authors/${authorId}`);

	t.is(response.statusCode, 204);
});

// Test case: Get all categories
test('GET /categories should return a list of categories', async t => {
	const response = await got(`${baseURL}/categories`);

	t.is(response.statusCode, 200);
	t.true(Array.isArray(JSON.parse(response.body)));
});

// Test case: Add a new category
test('POST /categories should create a new category', async t => {
	const newCategory = { name: 'Sample Category' };

	const response = await got.post(`${baseURL}/categories`, {
		json: newCategory,
		responseType: 'json'
	});

	t.is(response.statusCode, 201);
	t.is(response.body.name, newCategory.name);
});

// Test case: Get details of a specific category
test('GET /categories/{categoryId} should return a specific category', async t => {
	const categoryId = 1; // Assume the category ID is 1

	const response = await got(`${baseURL}/categories/${categoryId}`);

	t.is(response.statusCode, 200);
	t.is(response.body.id, categoryId);
});

// Test case: Update a specific category
test('PUT /categories/{categoryId} should update a specific category', async t => {
	const categoryId = 1; // Assume the category to update
	const updatedCategory = { name: 'Updated Sample Category' };

	const response = await got.put(`${baseURL}/categories/${categoryId}`, {
		json: updatedCategory,
		responseType: 'json'
	});

	t.is(response.statusCode, 200);
	t.is(response.body.name, updatedCategory.name);
});

// Test case: Delete a specific category
test('DELETE /categories/{categoryId} should delete a specific category', async t => {
	const categoryId = 1; // Assume the category to delete

	const response = await got.delete(`${baseURL}/categories/${categoryId}`);

	t.is(response.statusCode, 204);
});

/*
 * Key Enhancements in This Version
 *
 Detailed Comments: Each test case contains comments that explain what the test is doing, why it's making particular assertions, and clarifies the intended behavior.            *
 got Library Usage: This library simplifies HTTP requests, making it straightforward to handle JSON responses with type assertions.
 Node.js HTTP Module: Though not directly used in this tests, importing it is useful for scenarios where you might want to extend functionality or create an HTTP server.

 This test suite thoroughly checks each route of the API, ensuring that responses are as expected. Adjust the bookId, authorId, and categoryId values based on your existing dataset.
*/

/*
 * Previous Version: Key Points
 *
 Axios: Used for making API requests. Ensure it's installed in your project (npm install axios).                      *
 Ava: A test runner that runs tests concurrently. Ensure it's set up in your project.
 Assumptions: Test values (like IDs) are based on expected responses; adjust as necessary based on your setup.

 This file tests each API route against the expected outcomes, leveraging the setup provided in the OpenAPI specification.
*/
