from app import application
from app.models import db


class Project(db.Model):
    __tablename__ = 'projects'

    name = db.Column(db.String(255), nullable=False)
