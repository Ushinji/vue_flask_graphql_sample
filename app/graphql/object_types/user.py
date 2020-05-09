from graphene import relay
from graphene_sqlalchemy import SQLAlchemyObjectType
from app.models.user import User as UserModel


class User(SQLAlchemyObjectType):
    class Meta:
        model = UserModel
        interfaces = (relay.Node, )
