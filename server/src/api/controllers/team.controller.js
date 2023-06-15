import passport from 'passport';
import jwt from 'jsonwebtoken';
import { AwesomeGraphQLClient } from 'awesome-graphql-client';
import fetch from 'node-fetch';

import settings from '../../config/settings';


const getTeam = async(req, res, next) => {
    const queryGetTeam = `
  
    query getUserByUsername($username: String!) {
        authUser(where: { username: "Miranda.Blanda" }) {
          id,
          username,
          email,
          password
        }
      }
  `;

    const client = new AwesomeGraphQLClient({
        endpoint: `${settings.GRAPHCMS_CONTENT_API}`,
        fetch,
        fetchOptions: {
            headers: {
                Authorization: `Bearer ${settings.GRAPHCMS_ACCESS_TOKEN}`,
            },
        },
    });
    const { team } = await client.request(queryGetTeam);

    console.log(team);
};



export default {
    getTeam,
};