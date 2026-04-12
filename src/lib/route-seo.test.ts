import assert from "node:assert/strict";
import test from "node:test";

import { buildStructuredData, getRouteSeo } from "./route-seo";

test("getRouteSeo returns the homepage metadata by default", () => {
  const seo = getRouteSeo("/unknown");
  assert.equal(seo.path, "/");
  assert.match(seo.title, /SERE Smart Hatching/);
});

test("buildStructuredData includes the product collection on the home page", () => {
  const schema = buildStructuredData("/");
  assert.equal(schema.length, 3);
  assert.equal(schema[2]?.["@type"], "CollectionPage");
});
