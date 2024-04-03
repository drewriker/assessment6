const shuffle = require("../src/shuffle");
const bots = require("../src/botsData");

describe("shuffle should...", () => {
	test("shuffle should return an array", () => {
		let expected = typeof [];
		let actual = typeof shuffle(bots);

		expect(actual).toBe(expected);
	});
	test("shuffle should return shuffled data", () => {
		let array = ["who", "what", "when", "where", "why", "this", "that"];
		let expected = array;
		let actual = shuffle(array);

		expect(actual).not.toBe(expected);
	});
});
