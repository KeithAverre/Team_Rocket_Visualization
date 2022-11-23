import json
from time import sleep
from random import randint

from channels.generic.websocket import WebsocketConsumer


class FlightConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()
        ls=[1,2,3,4,5,6,7,8,9,10]
        for i in range(10):
            self.send(json.dumps({'value':ls[i]}))
            #self.send(json.dumps({'value': randint(-50, 50)}))
            sleep(1)
    def disconnect(self, code):
        pass