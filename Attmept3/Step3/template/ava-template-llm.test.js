import test from 'ava'; // Import the AVA test library
import got from 'got'; // Import the `got` library for making HTTP requests

const baseURL = 'https://example.com/api'; // Change this to your API's base URL

// Basic configuration for common test parameters
const commonTestParams = {
	headers: {
		'Content-Type': 'application/json', // Setting Content-Type to JSON for all requests
	},
	responseType: 'json', // Expecting JSON responses
};

// Test case: Check if the base URL is reachable
test('Base URL should be reachable', async t => {
	const response = await got(baseURL);
	t.is(response.statusCode, 200); // Assert that the status code is 200 (OK)
});

// Test case template: GET request
test('GET {endpoint} should return 200 and an array', async t => {
	const endpoint = '/items'; // Specify the endpoint to test
	const response = await got(`${baseURL}${endpoint}`, commonTestParams);

	// Assert that the response status code is 200
	t.is(response.statusCode, 200);

	// Assert that the response body is an array
	t.true(Array.isArray(response.body));
});

// Test case template: POST request
test('POST {endpoint} should create an item and return 201', async t => {
	const endpoint = '/items'; // Specify the endpoint to test
	const newItem = { name: 'New Item', value: 42 }; // Sample data for creating an item

	const response = await got.post(`${baseURL}${endpoint}`, {
		...commonTestParams, // Spread common parameters
		json: newItem, // Send the new item as JSON
	});

	// Assert that the response status code is 201 (Created)
	t.is(response.statusCode, 201);

	// Assert that the returned item has the same properties as the created item
	t.is(response.body.name, newItem.name);
});

// Test case template: PUT request
test('PUT {endpoint}/{id} should update an item and return 200', async t => {
	const endpoint = '/items'; // Specify the endpoint to test
	const itemId = 1; // Specify the ID of the item to update
	const updatedItem = { name: 'Updated Item', value: 100 }; // Sample data for updating an item

	const response = await got.put(`${baseURL}${endpoint}/${itemId}`, {
		...commonTestParams,
		json: updatedItem,
	});

	// Assert that the response status code is 200
	t.is(response.statusCode, 200);

	// Assert that the returned item has been updated
	t.is(response.body.name, updatedItem.name);
});

// Test case template: DELETE request
test('DELETE {endpoint}/{id} should delete an item and return 204', async t => {
	const endpoint = '/items'; // Specify the endpoint to test
	const itemId = 1; // Specify the ID of the item to delete

	const response = await got.delete(`${baseURL}${endpoint}/${itemId}`, commonTestParams);

	// Assert that the response status code is 204 (No Content)
	t.is(response.statusCode, 204);
});

// Additional tests can follow similar patterns by defining new endpoints and expected behaviors

/*
 * Key Features of This Template
 *
Basic URL Validation: The template includes a test to check if the base URL is reachable.
Reusable Test Cases: Each HTTP method (GET, POST, PUT, DELETE) has template test cases that can be easily modified to fit specific APIs.
Common Test Parameters: The template uses a common configuration for headers and response types to keep the code DRY (Don't Repeat Yourself).
Extensive Comments: Each section includes comments that explain the purpose of the test and its components, making it easy for others to understand how to use or extend the template.

This structure allows for easy adaptation to different APIs—simply update the baseURL, endpoints, and data as required.
*/

