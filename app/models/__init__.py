from flask_sqlalchemy import Model, SQLAlchemy
from sqlalchemy import Column, Integer, DateTime
from datetime import datetime
from app import application


class RecordNotFoundError(Exception):
    pass


class BaseModel(Model):
    id = Column(Integer, primary_key=True)
    created_at = Column(DateTime, default=datetime.now, nullable=False)
    updated_at = Column(DateTime, default=datetime.now, nullable=False)

    @classmethod
    def find(cls, id):
        record = cls.query.get(id)
        if not record:
            raise RecordNotFoundError
        return record

    @classmethod
    def find_by(cls, **kwargs):
        return cls.query.filter_by(**kwargs).first()

    def save(self, commit=True):
        self.query.session.add(self)
        if commit:
            self.query.session.commit()
        else:
            self.query.session.flush()
        return self


db = SQLAlchemy(application, model_class=BaseModel)

from .project import Project  # nopep8
from .user import User  # nopep8
