from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType
from app.models.project import Project as ProjectModel


class Project(SQLAlchemyObjectType):
    class Meta:
        model = ProjectModel
        interfaces = (relay.Node, )
