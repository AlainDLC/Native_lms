import { gql, request } from "graphql-request";
const MASTER_URL =
  "https://eu-west-2.cdn.hygraph.com/content/cm5wagig2002e06w60umm8yoy/master";

export const getCourseList = async (level: string | undefined) => {
  const query = gql`
    query CurseList {
      courses(where: { level: Basic }) {
        id
        name
        level
        price
        time
        author
        banner {
          url
        }
        description {
          markdown
        }
        capters {
          tilte
          id
          content {
            heading
            description {
              markdown
            }
            output {
              markdown
            }
          }
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const enrollCourse = async (
  courseId: string | undefined,
  userEmail: string | undefined
) => {
  const query =
    gql`
    mutation MyMutation {
      createUserEnrolledCourse(
        data: {
          courseId: "` +
    courseId +
    `"
          userEmail: "` +
    userEmail +
    `"
          course: { connect: { id: "` +
    courseId +
    `" } }
        }
      ) {
        id
      }
      publishManyUserEnrolledCoursesConnection(to: PUBLISHED) {
        edges {
          node {
            id
          }
        }
      }
        
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};
