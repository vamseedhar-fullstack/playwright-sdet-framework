import { faker } from '@faker-js/faker';

/**
 * Data Generator Utility
 * ----------------------
 * Provides reusable random test data for UI and API tests.
 * Helps avoid hard-coded values and supports dynamic data creation
 * (e.g., user registration, checkout flow, API payloads).
 */

export class DataGenerator {
  // Generate random user details
  static generateUser() {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password({ length: 10 }),
      phone: faker.phone.number(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      postalCode: faker.location.zipCode(),
      country: faker.location.country()
    };
  }

  // Generate a random product object (for e-commerce)
  static generateProduct() {
    return {
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      sku: faker.string.uuid(),
      stock: faker.number.int({ min: 1, max: 500 })
    };
  }

  // Generate a random API payload for demo or POST request
  static generatePayload() {
    return {
      id: faker.string.uuid(),
      title: faker.lorem.words(3),
      body: faker.lorem.sentences(2),
      createdAt: new Date().toISOString()
    };
  }

  // Generate a fake checkout data set
  static generateCheckoutData() {
    return {
      firstname: faker.person.firstName(),
      lastname: faker.person.lastName(),
      zipcode: faker.location.zipCode()
    };
  }
}
