// import { test, expect, request } from '@playwright/test';

// test.describe('Strapi API Tests', () => {
//   let apiContext;

//   test.beforeAll(async ({ playwright }) => {
//     apiContext = await request.newContext({
//       baseURL: process.env.API_BASE_URL,
//       extraHTTPHeaders: {
//         Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
//         'Content-Type': 'application/json'
//       }
//     });
//   });

//   test('GET /pr - should return latest PR mentions  @regression', async () => {
//     const response = await apiContext.get('/pr');
//     expect(response.status()).toBe(200);

//     const body = await response.json();
//     expect(body).toHaveProperty('data');
//     expect(Array.isArray(body.data)).toBe(true);
//   });


//   test('GET /gallery - should return media events  @smoke', async () => {
//     const response = await apiContext.get('/gallery');
//     expect(response.status()).toBe(200);
//     const data = await response.json();
//     expect(data).toHaveProperty('data');
//   });

//   test('GET /events-gallery - should filter by year  @smoke', async () => {
//     const response = await apiContext.get('/events-gallery', {
//       params: { year: '2023' }
//     });
//     expect(response.status()).toBe(200);
//     const data = await response.json();
//     expect(data).toHaveProperty('data');
//   });

//   test('GET /gallery-years - should return all media events', async () => {
//     const response = await apiContext.get('/gallery-years');
//     expect(response.status()).toBe(200);
//     const data = await response.json();
//     expect(data).toHaveProperty('data');
//   });

//   test('GET /short-videos - should return short videos  @regression', async () => {
//     const response = await apiContext.get('/short-videos');
//     expect(response.status()).toBe(200);
//     const data = await response.json();
//     expect(data).toHaveProperty('data');
//   });
// });
