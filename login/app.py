import os
from flask import Flask, render_template, request, redirect
from flask_sqlalchemy import SQLAlchemy
from Models import db
from Models import User

app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
dbfile = os.path.join(basedir, 'db.sqlite')

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + dbfile
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

@app.route('/')
def hello():
    return 'Hello World!'

@app.route('/register', methods=['GET','POST'])
def register():
    if request.method == 'GET':
        return render_template("register.html")
    else:
        with app.app_context():
            db.init_app(app)
            db.app = app
            db.create_all()

            userid = request.form.get('userid')
            email = request.form.get('email')
            password = request.form.get('password')
            password_2 = request.form.get('password')

            if not(userid and email and password and password_2):
                return "입력되지 않은 정보가 있습니다"
            elif password != password_2:
                return "비밀번호가 일치하지 않습니다"
            else:
                usertable=User()
                usertable.userid = userid
                usertable.email = email
                usertable.password = password
                
                db.session.add(usertable)
                db.session.commit()
                return "회원가입 성공"

    return redirect('/')

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
