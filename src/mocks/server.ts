/* eslint-disable */
// @ts-nocheck
import { rest, setupWorker } from 'msw';
import { factory, manyOf, oneOf, primaryKey } from '@mswjs/data';
import { nanoid } from '@reduxjs/toolkit';
import { faker } from '@faker-js/faker';
import pseudorandom from 'seedrandom';
import { APIRoute } from '../consts/enum';

const NUM_USERS = 3;
const POSTS_PER_USER = 3;
const RECENT_NOTIFICATIONS_DAYS = 7;
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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(rng() * (max - min + 1)) + min;
}

const randomFromArray = (array) => {
  const index = getRandomInt(0, array.length - 1);
  return array[index];
};

/* MSW Data Model Setup */

const flavors = ["ванильный", "шоколадный", "клубничный", "кокосовый", "манго", "арбузный"]
const titles = ["гамбургер", "чизбургер", "гренки", "картофель фри", "наггетсы", "хот-дог"]
const volumeNames = ['упаковка (100 г)', 'упаковка (30 г)', 'литр']
export const db = factory({
  // user: {
  //   id: primaryKey(nanoid),
  //   firstName: String,
  //   lastName: String,
  //   name: String,
  //   username: String,
  //   posts: manyOf('post')
  // },
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
  // comment: {
  //   id: primaryKey(String),
  //   date: String,
  //   text: String,
  //   post: oneOf('post')
  // },
  // reaction: {
  //   id: primaryKey(nanoid),
  //   thumbsUp: Number,
  //   hooray: Number,
  //   heart: Number,
  //   rocket: Number,
  //   eyes: Number,
  //   post: oneOf('post')
  // }
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

const createPostData = (user) => {
  return {
    title: faker.commerce.product(),
    date: faker.date.recent(RECENT_NOTIFICATIONS_DAYS).toISOString(),
    user,
    content: faker.lorem.paragraphs(),
    reactions: db.reaction.create()
  };
};


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
  // rest.post('/fakeApi/posts', function (req, res, ctx) {
  //   const data = req.body;
  //
  //   if (data.content === 'error') {
  //     return res(
  //       ctx.delay(ARTIFICIAL_DELAY_MS),
  //       ctx.status(500),
  //       ctx.json('Server error saving this post!')
  //     );
  //   }
  //
  //   data.date = new Date().toISOString();
  //
  //   data.user = db.user.findFirst({ where: { id: { equals: data.user } } });
  //   data.reactions = db.reaction.create();
  //
  //   const post = db.post.create(data);
  //   return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(serializePost(post)));
  // }),
  // rest.get('/fakeApi/posts/:postId', function (req, res, ctx) {
  //   const post = db.post.findFirst({
  //     where: { id: { equals: req.params.postId } }
  //   });
  //   return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(serializePost(post)));
  // }),
  // rest.patch('/fakeApi/posts/:postId', (req, res, ctx) => {
  //   const { id, ...data } = req.body;
  //   const updatedPost = db.post.update({
  //     where: { id: { equals: req.params.postId } },
  //     data
  //   });
  //   return res(
  //     ctx.delay(ARTIFICIAL_DELAY_MS),
  //     ctx.json(serializePost(updatedPost))
  //   );
  // }),
  //
  // rest.get('/fakeApi/posts/:postId/comments', (req, res, ctx) => {
  //   const post = db.post.findFirst({
  //     where: { id: { equals: req.params.postId } }
  //   });
  //   return res(
  //     ctx.delay(ARTIFICIAL_DELAY_MS),
  //     ctx.json({ comments: post.comments })
  //   );
  // }),
  //
  // rest.post('/fakeApi/posts/:postId/reactions', (req, res, ctx) => {
  //   const postId = req.params.postId;
  //   const reaction = req.body.reaction;
  //   const post = db.post.findFirst({
  //     where: { id: { equals: postId } }
  //   });
  //
  //   const updatedPost = db.post.update({
  //     where: { id: { equals: postId } },
  //     data: {
  //       reactions: {
  //         ...post.reactions,
  //         [reaction]: (post.reactions[reaction] += 1)
  //       }
  //     }
  //   });
  //
  //   return res(
  //     ctx.delay(ARTIFICIAL_DELAY_MS),
  //     ctx.json(serializePost(updatedPost))
  //   );
  // }),
  // rest.get('/fakeApi/notifications', (req, res, ctx) => {
  //   const numNotifications = getRandomInt(1, 5);
  //
  //   let notifications = generateRandomNotifications(
  //     undefined,
  //     numNotifications,
  //     db
  //   );
  //
  //   return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(notifications));
  // }),
  // rest.get('/fakeApi/users', (req, res, ctx) => {
  //   return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(db.user.getAll()));
  // })
];

const worker = setupWorker(...handlers);
// worker.printHandlers() // Optional: nice for debugging to see all available route handlers that will be intercepted

export { worker };
