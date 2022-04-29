// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

const generateAddress = () => {
  const street = faker.name.firstName().toLowerCase();
  const number = faker.datatype.number({
    min: 10,
    max: 50,
  });
  const district = faker.lorem.sentence();
  const city = faker.lorem.sentence();
  const complement = faker.lorem.sentence();

  return { street, number, district, city, complement };
};

export { generateAddress };
