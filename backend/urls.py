from django.urls import path

from . import views

urlpatterns = [
    path('', views.recognize, name='recognize'),
    path('/melganvc', views.voice_conversion, name='voice_conversion')
]