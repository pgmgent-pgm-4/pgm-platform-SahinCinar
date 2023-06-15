import faker from '@faker-js/faker';
import fetch from 'node-fetch';
import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';

const mutationCreatePost = `
mutation CreatePostMutation($title: String!, $summary: String!, $text: String!) {
  __typename
  createPost(data: {title: $title, summary: $summary, text: $text}) {
    id,
    title,
    summary,
    text
  }
}`;

(async () => {
    /*
     * Create a Post (Local Provider)
     */
    const createPost = async (title, summary, text) => {
        try {
            const {
                createPost
            } = await client.request(mutationCreatePost, {
                title,
                summary,
                text
            });

            if (!createPost) {
                throw new Error(`Can't create the Teammember with name ${createPost.name}!`);
            }

            console.log(`Teammember created with name ${createPost.title}!`)
        } catch (error) {
            console.log(error);
        }
    };

    /*
     * Create Posts via promises
     */
    const createPosts = async (n = 20) => {
        const promises = [];
        for (let i=0; i < n;i++) {
            let title = faker.lorem.sentence(generateValueBetweenMinAndMax(4, 10));
            let summary = faker.lorem.sentence(generateValueBetweenMinAndMax(4, 20));
            let body = faker.lorem.text(2);
     
            promises.push(await createPost(title, summary, body));
        }
        return await Promise.all(promises);
    };

    /*
     * Create Posts
     */
    await createPosts();

})();