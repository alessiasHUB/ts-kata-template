import pokerHands from "./poker-hands";

// delete the ".skip"
test.skip("test discription", () => {
  expect(pokerHands(4, 3)).toBe(7);
});
