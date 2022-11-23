from django.urls import path
from .consumers import FlightConsumer

ws_urlpatterns = [
    path('ws/Flight_visualization/', FlightConsumer.as_asgi())
]