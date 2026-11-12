// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 327; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.fetchThenEvalAsync = fetchThenEvalAsync),
      r(d[0]));
    var _fetchAsync = r(d[1]);
    function fetchThenEvalAsync(url) {
      return (0, _fetchAsync.fetchAsync)(url).then(
        ({ body: body, status: status, headers: headers }) => {
          if (
            null != headers?.has?.('Content-Type') &&
            headers.get('Content-Type').includes('application/json')
          )
            throw new Error(
              JSON.parse(body).message || `Unknown error fetching '${url}'`,
            );
          if (200 === status) return eval(body);
          throw new Error(
            `Failed to load split bundle from URL: ${url}\n${body}`,
          );
        },
      );
    }
  },
  327,
  [328, 329],
);
