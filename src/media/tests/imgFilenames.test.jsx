import imgFilenames from "../imgFilenames";

test("Filenames below 10 start with zero", () => {
  const imageCount = 15;
  const filenames = imgFilenames(imageCount);
  expect(filenames.splice(0, 9)).toEqual(["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg"]);
});

test("Filenames from 10 do not start with zero", () => {
  const imageCount = 12;
  const filenames = imgFilenames(imageCount);
  expect(filenames.splice(9)).toEqual(["10.jpg", "11.jpg", "12.jpg"]);
});
