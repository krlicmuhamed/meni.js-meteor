// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meni.js.
import { name as packageName } from "meteor/meni";

// Write your tests here!
// Here is an example.
Tinytest.add('meni - example', function (test) {
  test.equal(packageName, "meni");
});

// TODO: Write tests.
