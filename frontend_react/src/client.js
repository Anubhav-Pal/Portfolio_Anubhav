// Sanity linking code (whatever you say it)
// This code is responsible for setting up a connection to the Sanity API and providing a convenient way to generate URLs for images stored in a Sanity project.

import { createClient} from '@sanity/client'
import imageURLBuilder from '@sanity/image-url'

export const client = createClient(
    {
        projectId: process.env.REACT_APP_SANITY_PROJECT_ID,  
        dataset: "production",
        apiVersion: "2022-02-03",
        useCdn: true,
        token: process.env.REACT_APP_SANITY_TOKEN
    }
)

const builder = imageURLBuilder(client);
// mandat code used in sanity when you are working with images
export const urlFor = (source) => builder.image(source);
