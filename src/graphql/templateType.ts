import { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } from 'graphql';

export const TemplateType = new GraphQLObjectType({
  name: 'Template',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    technologies: { type: new GraphQLList(GraphQLString) }
  })
});
