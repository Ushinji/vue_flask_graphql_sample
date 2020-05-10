import gql from 'graphql-tag';

type ProjectNode = {
  node: {
    id: number;
    name: string;
  };
};

export type ALL_PROJECTS_RESULT = {
  allProjects: {
    edges: ProjectNode[];
  };
};

export const ALL_PROJECTS_QUERY = gql`
  query {
    allProjects {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`;
