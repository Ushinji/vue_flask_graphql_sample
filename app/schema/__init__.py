import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField
from .project import Project
from .user import User


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    all_users = SQLAlchemyConnectionField(User)
    all_projects = SQLAlchemyConnectionField(Project)


schema = graphene.Schema(query=Query)
