import { GraphQLObjectType, GraphQLID } from 'graphql';
import { TemplateType } from './templateType';

export const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    template: {
      type: TemplateType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
      // Aquí se haría la consulta a la base de datos
        return {
          id: args.id,
          name: "Ejemplo",
          description: "Descripción de ejemplo",
          technologies: ["React", "GraphQL"]
        };
      }
    }
  }
});
