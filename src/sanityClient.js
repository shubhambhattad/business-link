import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "s0atti9j",
  dataset: "idcre",
});
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default client;
