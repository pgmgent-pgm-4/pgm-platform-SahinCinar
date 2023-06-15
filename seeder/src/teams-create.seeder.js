import faker from '@faker-js/faker';
import fetch from 'node-fetch';
import client from './graphql_client';
import { generateValueBetweenMinAndMax, generateTimestamps } from './utils';

const mutationCreateTeam = `
mutation CreateTeamMutation($name: String!, $type: String!, $image: String!) {
  __typename
  createTeam(data: {name: $name, type: $type, image: $image}) {
    id,
    name,
    type,
    image
  }
}`;

(async () => {
    /*
     * Create a Team Member (Local Provider)
     */
    const createTeam = async (name, type, image) => {
        try {
            const {
                createTeam
            } = await client.request(mutationCreateTeam, {
                name,
                type,
                image
            });

            if (!createTeam) {
                throw new Error(`Can't create the Teammember with name ${createTeam.name}!`);
            }

            console.log(`Teammember created with name ${createTeam.name}!`)
        } catch (error) {
            console.log(error);
        }
    };

    /*
     * Create Team Members via promises
     */
    const createTeams = async (n = 20) => {
        const promises = [];
        for (let i=0; i < n;i++) {
            const gender = generateValueBetweenMinAndMax(0, 1);
            const name = faker.name.firstName(gender) + " " + faker.name.lastName(gender);
            const type = faker.random.arrayElement(["Lecturer","Student"]);
            const image = faker.image.avatar();
            promises.push(await createTeam(name, type, image));
        }
        return await Promise.all(promises);
    };

    /*
     * Create Team Members
     */
    await createTeams();

})();