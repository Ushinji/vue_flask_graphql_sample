import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField
from .project import Project


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    projects = graphene.List(Project)

    def resolve_projects(self, info):
        query = Project.get_query(info)  # SQLAlchemy query
        return query.all()


schema = graphene.Schema(query=Query)
