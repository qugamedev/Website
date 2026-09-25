import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';//pip install these if needed
const client = createClient({
  projectId: 'wmbpe096', //project ID from the sanity.io page. login with QGDC club credentials. DO NOT EXPOSE TO PUBLIC!!!!!! aka keep in the private repo
  dataset: 'production', //for now we only have 1 dataset (production), if for some reason you need another then make one at sanity.io project dashboard and change this
  useCdn: true, // use false if you want fresh data every time aka if youre debugging lol
  apiVersion: '2023-01-01', // or use today's date if this gives you trouble fetching
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {//used so that JS respects the hotspot crops from Sanity rather than using full uncropped images.
  return builder.image(source);
}
export default client;
