randomt hing i md efor my website makes pat h normal in express

⚠ `express.static()` may infinite redirect because `express.static()` adds "/" to the path for directories

✔ add `{ redirect: false }` as an option to disabled this so it look like `express.static(path, { redirect: false })`

```js
const normalize = require("normalize-path");
const express = require("express");

const app = express();
app.use(normalize);

app.get("/users/:id");
/*
Valid paths:
  //////users////296776625432035328///////
  /users/296776625432035328//////
*/

app.get("/param/another");
/*
Valid paths:
  /param/another/
  //////param//////another/////
*/

app.get("/");
/*
Valid paths:
  //////
  /
*/

app.listen(3000);
```