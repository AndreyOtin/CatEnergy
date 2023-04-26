/* eslint-disable */
// @ts-nocheck
import { rest, setupWorker } from 'msw';
import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import { nanoid } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import pseudorandom from 'seedrandom';
import { APIRoute } from '../consts/enum';

const ARTIFICIAL_DELAY_MS = 1000;

let useSeededRNG = true;
let rng = pseudorandom();

if (useSeededRNG) {
  let randomSeedString = localStorage.getItem('randomTimestampSeed');
  let seedDate;

  if (randomSeedString) {
    seedDate = new Date(randomSeedString);
  } else {
    seedDate = new Date();
    randomSeedString = seedDate.toISOString();
    localStorage.setItem('randomTimestampSeed', randomSeedString);
  }

  rng = pseudorandom(randomSeedString);
  faker.seed(seedDate.getTime());
}

const flavors = ["ванильный", "шоколадный", "клубничный", "кокосовый", "манго", "арбузный"]
const titles = ["гамбургер", "чизбургер", "гренки", "картофель фри", "наггетсы", "хот-дог"]
const volumeNames = ['упаковка (100 г)', 'упаковка (30 г)', 'литр']

export const db = factory({
  product: {
    id: primaryKey(nanoid),
    flavor: String,
    price: Number,
    volume: Number,
    volumeName: String,
    title: String,
    content: String,
    image: String
  },
  extra: {
    id: primaryKey(nanoid),
    flavor: String,
    price: Number,
    volume: Number,
    volumeName: String,
    title: String,
    content: String,
    image: String
  },
});

const createProduct = () => {
  return {
    id: nanoid(),
    flavor: faker.helpers.arrayElement(flavors),
    price: faker.commerce.price(100, 1000, 0),
    volume: faker.datatype.number({ min: 100, max: 1000 }),
    volumeName: faker.helpers.arrayElement(volumeNames),
    title: faker.helpers.arrayElement(titles),
    content: faker.commerce.productDescription(),
    image: faker.image.imageUrl(640, 480, 'food', true),
  };
};

const createExtraProduct = () => {
  return {
    id: nanoid(),
    flavor: faker.helpers.arrayElement(flavors),
    price: faker.commerce.price(100, 1000, 0),
    volume: faker.datatype.number({ min: 100, max: 1000 }),
    volumeName: faker.helpers.arrayElement(volumeNames),
    title: faker.helpers.arrayElement(titles),
    content: faker.commerce.productDescription(),
    image: faker.image.imageUrl(640, 480, 'food', true),
  };
}

for (let i = 0; i < 25; i++) {
  db.product.create(createProduct());
}

for (let i = 0; i < 4; i++) {
  db.extra.create(createExtraProduct());
}


export const handlers = [
  rest.get(APIRoute.Poducts, function (req, res, ctx) {
    const products = db.product.getAll();
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(products));
  }),
  rest.get(APIRoute.ExtraProducts, function (req, res, ctx) {
    const products = db.extra.getAll();
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(products));
  }),
];

const worker = setupWorker(...handlers);

export { worker };
