// eslint-disable-next-line import/no-extraneous-dependencies
import faker from "@faker-js/faker";

const generateDoctor = () => {
  const name = faker.name.firstName().toLowerCase();
  const type = faker.random.arrayElement([
    "cardiologist",
    "dentist",
    "neurologist",
  ]);
  const email = faker.internet.email();
  const phone = faker.phone.phoneNumber();
  const sex = faker.random.arrayElement(["masculino", "feminino", "outros"]);
  const complement = faker.lorem.sentence();

  return { name, type, email, phone, sex, complement };
};

const generateUpdateDoctor = () => {
  const name = faker.name.firstName().toLowerCase();
  const type = faker.random.arrayElement([
    "cardiologist",
    "dentist",
    "neurologist",
  ]);
  const phone = faker.phone.phoneNumber();
  const sex = faker.random.arrayElement(["masculino", "feminino", "outros"]);
  const complement = faker.lorem.sentence();

  return { name, type, phone, sex, complement };
};

export { generateDoctor, generateUpdateDoctor };
