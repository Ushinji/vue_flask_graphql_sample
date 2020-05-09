from app import application
from app.models import db


class User(db.Model):
    __tablename__ = 'users'

    email = db.Column(db.String(255), nullable=False)
    is_admin = db.Column(db.Boolean, nullable=False, default=False)
    project_id = db.Column(db.Integer, db.ForeignKey(
        'projects.id', ondelete='CASCADE'), nullable=False)
