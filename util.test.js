const { generateText, checkAndGenerate } = require("./util");


test('Should output name and age', () => {
 const text = generateText("Cia", 34);
 expect(text).toBe("Cia (34 years old)")
});


test('Should generate a valid text output', () => {
 const text = checkAndGenerate("Cia", 34);
 expect(text).toBe("Cia (34 years old)")
});

