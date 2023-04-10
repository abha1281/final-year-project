import { faker } from "@faker-js/faker";


const useFakeJs = () => {
  const generateResults = (numberOfResults: number) => {
    const results = [];
    for (let i = 0; i < numberOfResults; i++) {
      const result = {
        id: `${faker.random.alphaNumeric()}-${faker.random.alphaNumeric()}-${faker.random.alphaNumeric()}`,
        title: faker.lorem.sentence(),
        author: faker.name.fullName(),
        location: faker.address.city(),
        culture: faker.lorem.words(3),
      };
      results.push(result);
    }
    return results;
  };

  return {
    generateResults,
  };
};

export default useFakeJs;
