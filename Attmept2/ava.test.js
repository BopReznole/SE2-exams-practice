const http = require('http');
const test = require('ava');
const got = require('got');
const app = require('../index.js');

test.before(async (t) => {
    t.context.server = http.createServer(app);
  const server = t.context.server.listen();
  const { port } = server.address();
    t.context.got = got.extend({ responseType: "json", prefixUrl: `http://localhost:${port}` });
  });

  test.after.always((t) => {
    t.context.server.close();
  });

  test("GET /books endpoint returns 200 and valid JSON content-type header", async (t) => {
    const { headers, statusCode } = await t.context.got("books");
    t.is(statusCode, 200);                   // The status code should be 200
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("GET /books/:bookId endpoint returns 200 and valid JSON content-type header", async (t) => {
    const { headers, statusCode } = await t.context.got("books/1");
    t.is(statusCode, 200);                   // The status code should be 200
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("GET /authors endpoint returns 200 andvalid JSON content-type header", async (t) => {
    const { headers, statusCode } = await t.context.got("authors");
    t.is(statusCode, 200);                   // The status code should be 200
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("GET /authors/:authorId endpoint returns 200 andvalid JSON content-type header", async (t) => {
    const { headers, statusCode } = await t.context.got("authors/1");
    t.is(statusCode, 200);                   // The status code should be 200
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("GET /categories endpoint returns 200 andvalid JSON content-type header", async (t) => {
    const { headers, statusCode } = await t.context.got("categories");
    t.is(statusCode, 200);                   // The status code should be 200
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("GET /categories/:categoryId endpoint returns 200 andvalid JSON content-type header", async (t) => {
    const { headers, statusCode } = await t.context.got("categories/1");
    t.is(statusCode, 200);                   // The status code should be 200
    t.is(headers["content-type"], "application/json"); // The content-type should be JSON
  });

  test("DELETE /books/:bookId endpoint returns 204", async (t) => {
    const { statusCode } = await t.context.got.delete("books/1");
    t.is(statusCode, 204);                   // The status code should be 204
  });

  test("DELETE /authors/:authorId endpoint returns 204", async (t) => {
    const { statusCode } = await t.context.got.delete("authors/1");
    t.is(statusCode, 204);                   // The status code should be 204
  });

  test("DELETE /categories/:categoryId endpoint returns 204", async (t) => {
    const { statusCode } = await t.context.got.delete("categories/1");
    t.is(statusCode, 204);                   // The status code should be 204
  });

  test("POST /books endpoint returns 201", async (t) => {
    const {statusCode} = await t.context.got.post("books", {
        json: {
            title: "Book Title",
            author_id: 1,
            category_id: 1,
            published_year: 2025
        }
    });
    t.is(statusCode, 201);                   // The status code should be 201
  });

   test("POST /authors endpoint returns 201", async (t) => {
    const {statusCode } = await t.context.got.post("authors",{
        json: {
            name: "Author"
        }
    });
    t.is(statusCode, 201);                   // The status code should be 201
  });

   test("POST /categories endpoint returns 201", async (t) => {
    const {statusCode } = await t.context.got.post("categories",{
        json: {
            name: "Category"
        }
    });
    t.is(statusCode, 201);                   // The status code should be 201
  });

   test("PUT /books/:bookId endpoint returns 200", async (t) => {
    const {statusCode } = await t.context.got.put("books/1",{
        json: {
            title: "Book Title",
            author_id: 1,
            category_id: 1,
            published_year: 2025
        }
    });
    t.is(statusCode, 200);                   // The status code should be 200
  });

  test("PUT /authors/:authorId endpoint returns 200", async (t) => {
    const {statusCode } = await t.context.got.put("authors/1",{
        json: {
            name: "Author"
        }
    });
    t.is(statusCode, 200);                   // The status code should be 200
  });

  test("PUT /categories/:categoryId endpoint returns 200", async (t) => {
    const {statusCode } = await t.context.got.put("categories/1",{
        json: {
            name: "Category"
        }
    });
    t.is(statusCode, 200);                   // The status code should be 200
  });