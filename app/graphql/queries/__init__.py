import graphene
from graphene import relay
from graphene_sqlalchemy import SQLAlchemyConnectionField
from app.graphql.object_types.project import Project
from app.graphql.object_types.user import User


class Query(graphene.ObjectType):
    node = relay.Node.Field()
    all_users = SQLAlchemyConnectionField(User)
    all_projects = SQLAlchemyConnectionField(Project)
