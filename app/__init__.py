import os
from flask import Flask
from flask_graphql import GraphQLView


application = Flask(__name__)


env = os.getenv('RUN_MODE', 'development')
application.config['RUN_MODE'] = env

if (env == 'development'):
    application.config.from_object('app.config.development.Config')
elif (env == 'test'):
    application.config.from_object('app.config.test.Config')
else:
    raise Exception(f"env is required \'development\', \'test\'. env: {env}")


import app.views  # nopep8
from .schema import schema  # nopep8


application.add_url_rule(
    '/graphql',
    view_func=GraphQLView.as_view(
        'graphql',
        schema=schema,
        graphiql=True  # for having the GraphiQL interface
    )
)
