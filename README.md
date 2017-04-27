# More ways to send data to the server!
This is a client server exchange concept and will requires some express specific syntax on the server.

To access this data on the server you don't need `body-parser`.

## URL Params

### Examples of the URL/Request:

```
// http://localhost:3003/test/45
//http://localhost:3003/testQuery/bob
```
** Note on the Server you will have to define this in the route. Checkout the `server.js` for how to do that.

This data is stored on the server request at `req.params`. Try logging it out.

## Query String

### Examples of the URL/Request:
```
//http://localhost:3003/testQuery?name=bob
//http://localhost:3003/testQuery?name=bob
//http://localhost:3003/test?id=45
```
** Note you don't have to change how you define the server route. Checkout the `server.js` for how to do that.

This data is stored on the server request at `req.query`. Try logging it out.

## Express Documentation
[https://expressjs.com/en/guide/routing.html](https://expressjs.com/en/guide/routing.html)
