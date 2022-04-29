// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

const generateDisease = () => {
  const name = faker.name.firstName().toLowerCase();

  return { name };
};

const generateUserDisease = () => {
  const name = faker.name.firstName().toLowerCase();
  const description = faker.lorem.sentence();
  const medication = faker.lorem.sentence();

  return { name, description, medication };
};

export { generateDisease, generateUserDisease };
