import os
from app.config import BaseConfig
from app import application

db_path = os.path.join(
    os.path.dirname(application.instance_path),
    'database/development.db'
)


class Config(BaseConfig):
    SQLALCHEMY_DATABASE_URI = f'sqlite:////{db_path}'
