import time
from flask import Flask,jsonify,request,make_response,abort
from flask_cors import CORS, cross_origin
import pyodbc
import json
#import RPi.GPIO as GPIO
#import time

conn = pyodbc.connect("DRIVER={SQL Server}; Server=.\SQLEXPRESS; Database=PersonalBio/Home; Trusted_Connection=yes;")

cursor = conn.cursor()

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

task = [{

        "hi": "you",
        "go": "do"
}]

@app.route('/', methods=['GET'])
@cross_origin(origin="*")
def api():
    cursor.execute("SELECT classTitle, name, Img FROM Home")
    s = cursor.fetchall()
    g = []
    for row in cursor.description: 
        g.append(row[0])
    a = {}
    h=[]
    for rows in s:
        for i in range(0,len(rows)):
            a[g[i]] = rows[i]
        h.append(a)
        a={}
    #d = json.dumps(s)
    #a = json.loads(d)
    #  cursor.close()
    #return jsonify(s)
    #return jsonify(task)
    return jsonify(h)


@app.route('/project', methods=['GET'])
@cross_origin(origin="*")
def project():
    cursor.execute("SELECT classTitle, name, Img FROM Home")
    s = cursor.fetchall()
    g = []
    for row in cursor.description:
        g.append(row[0])
    a = {}
    h = []
    for rows in s:
        for i in range(0, len(rows)):
            a[g[i]] = rows[i]
        h.append(a)
        a = {}
    return jsonify(h)

'''
api()
#robotic arm
@app.route('/', methods=['POST'])
@cross_origin(origin="*")
def api1():
    boy1 = request.json['do']
    print(request.json)
    task.append({'yo': boy1})
    pin = 18
    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pin, GPIO.OUT)

    if boy1 == 'on':
        print("LED On")
        GPIO.output(pin, GPIO.HIGH)

        time.sleep(5)
        print("LED off")

        GPIO.output(pin, GPIO.LOW)
        
    GPIO.cleanup()

    return jsonify(task)

@app.route('/', methods=['POST'])
@cross_origin(origin="*")
def api1():
    boy1 = request.json['do']
    print(request.json)
    task.append({'yo': boy1})
    return jsonify(task)

@app.route('/', methods=['PUT'])
@cross_origin(origin="*")
#supports_credentials=True)
def api2():
    boy2 = request.json['hi']
    print(type(boy2))
    #print(do)
    
    task[0]['hi'] = boy2
    return jsonify(task)

@app.route('/', methods=['DELETE'])
@cross_origin(origin="*")
#supports_credentials=True)
def api3():
    boy2 = request.json['hi']
    print(type(boy2))

    task[0].pop('hi')
    return jsonify(task)



'''
#conn.close()

if __name__ == '__main__':
    app.run()


