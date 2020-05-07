from flask import render_template
from app import application
from app.utils.assets_path import assets_path


@application.route('/', methods=['GET'])
def root_index():
    print(assets_path('main.js'))
    return render_template('root/index.html', assets_path=assets_path('main.js'))
