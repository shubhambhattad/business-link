import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "2hr3wtag",
  dataset: "production",
});
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source) => builder.image(source);

export default client;
