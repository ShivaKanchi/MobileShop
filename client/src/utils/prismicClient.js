import * as prismic from "@prismicio/client";

const repositoryName = "MobileShop";

export const client = prismic.createClient(repositoryName, {
  accessToken: "",
});
