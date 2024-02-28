import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "2hr3wtag",
  dataset: "production",
});

export default client;
