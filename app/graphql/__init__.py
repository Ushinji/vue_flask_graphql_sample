import graphene
from app.graphql.queries import Query


schema = graphene.Schema(query=Query)
