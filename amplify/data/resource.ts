import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const retailStoreSchema = a.schema({
  Product: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      description: a.string(),
      price: a.float(),
      current_stock: a.integer(),
      image: a.string(),
      rating: a.float(),
      style: a.string(),
    })
    .authorization([a.allow.public()]),
  Category: a
    .model({
      id: a.id().required(),
      name: a.string().required(),
      description: a.string(),
      image: a.string(),
      styles: a.string().array(),
      products: a.hasMany("Product"), //Define the relationship between Product and Category
    })
    .authorization([a.allow.public()]),
});

export type Schema = ClientSchema<typeof retailStoreSchema>;

export const data = defineData({
  schema: retailStoreSchema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: {
      expiresInDays: 7,
    },
  },
});
