import json
from time import sleep
from random import randint

from channels.generic.websocket import WebsocketConsumer

class FlightConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

        for i in range(1000):
            self.send(json.dumps({'value': randint(-50, 50)}))
            sleep(1)
