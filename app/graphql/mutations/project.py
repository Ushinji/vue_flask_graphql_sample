import graphql
import graphene
from app.graphql.object_types.project import Project
from app.models.project import Project as ProjectModel


class CreateProject(graphene.Mutation):
    class Arguments:
        name = graphene.String(required=True)

    project = graphene.Field(lambda: Project)

    def mutate(self, info, name):
        project = ProjectModel(name=name)
        project.save()
        return CreateProject(project=project)
