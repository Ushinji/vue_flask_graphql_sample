from flask import render_template
from app import application


@application.route('/', methods=['GET'])
def root_index():
    return render_template('root/index.html')
