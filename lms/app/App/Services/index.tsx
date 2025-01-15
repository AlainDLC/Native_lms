import { gql, request } from "graphql-request";
const MASTER_URL =
  "https://eu-west-2.cdn.hygraph.com/content/cm5wagig2002e06w60umm8yoy/master";

export const getCourseList = async (level: string | undefined) => {
  const query =
    gql`
    query CurseList {
      courses(where: { level: ` +
    level +
    ` }) {
        id
        name
        level
        price
        time
        author
        banner {
          url
        }
        capters {
          id
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
