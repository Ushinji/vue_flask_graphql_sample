import graphene
from .project import CreateProject


class Mutation(graphene.ObjectType):
    save_project = CreateProject.Field()
