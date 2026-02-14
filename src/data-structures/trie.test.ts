import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { Trie } from "./trie.ts";

describe("Trie", () => {
  it("should insert and search words in the trie", () => {
    const trie = new Trie();

    trie.insert("hello");
    trie.insert("world");

    assert.equal(trie.searchPrefix("hell"), true);
    assert.equal(trie.searchPrefix("world"), true);
    assert.equal(trie.searchPrefix("hi"), false);
  });

  it("should search for complete words in the trie", () => {
    const trie = new Trie();

    trie.insert("hello");
    trie.insert("world");

    assert.equal(trie.search("hell"), false);
    assert.equal(trie.search("world"), true);
    assert.equal(trie.search("hi"), false);
  });

  it("should get all words", () => {
    const trie = new Trie();

    trie.insert("hello");
    trie.insert("world");
    trie.insert("hi");

    const expected = ["hello", "world", "hi"];
    const words = trie.getAllWords();

    assert.deepEqual(words.sort(), expected.sort());
  });

  it("should autocomplete words based on a prefix", () => {
    const trie = new Trie();

    trie.insert("hello");
    trie.insert("world");
    trie.insert("hi");
    trie.insert("her");

    const expected = ["hello", "hi", "her"];
    const suggestions = trie.autocomplete("h");

    assert.deepEqual(suggestions.sort(), expected.sort());
  });

  it("should provide correction suggestions", () => {
    const trie = new Trie();

    trie.insert("hello");
    trie.insert("world");

    const expected = ["hello"];
    const suggestions = trie.autocorrect("hllo");

    assert.deepEqual(suggestions.sort(), expected.sort());
  });
});
