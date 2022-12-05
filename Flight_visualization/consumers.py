import json
from time import sleep
from random import randint

from channels.generic.websocket import WebsocketConsumer

from .util import *
class FlightConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        i = 0
        while True:
            readin_data = read_file("flight0.txt",i)
            self.send(json.dumps({'value': readin_data}))
            i += 1
            #ask for file contents
            #ls=[1,2,3,4,5,6,7,8,9,10]
            #for i in range(10):

            #self.send(json.dumps({'value':ls[i]}))
            #self.send(json.dumps({'value': randint(-50, 50)}))
            sleep(1)
    def disconnect(self, code):
        pass