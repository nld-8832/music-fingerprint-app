from django.http import HttpResponse
from backend.dejavu import Dejavu
from backend.dejavu.logic.recognizer.file_recognizer import FileRecognizer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
from musicfp.encoder import MyEncoder
# from backend.melgan_vc.melganvc import get_networks, shape, wav_to_wav
import os
import json

# Create your views here.

config = {
    "database":  {
        "host": "db",
        "user": "postgres",
        "password": "password",
        "database": "backend"
    },
    "database_type": "postgres"
}
djv = Dejavu(config)
nchannels = 1
sampwidth = 1
framerate = 8000
nframes = 1
FILE_NAME = 'output.wav'

@csrf_exempt
@api_view(['GET', 'POST'])
@parser_classes([MultiPartParser])
def recognize(request):
    if request.method == "POST":
        blob = request.data.__getitem__('audio_data').file.read()
        if os.path.exists(FILE_NAME):
            os.remove(FILE_NAME)
        with open(FILE_NAME, mode='bx') as f:
            f.write(blob)
        results = djv.recognize(FileRecognizer, FILE_NAME)
        results = json.dumps(results, cls=MyEncoder, indent=4)
        return HttpResponse(results)


@csrf_exempt
@api_view(['GET', 'POST'])
@parser_classes([MultiPartParser])
def voice_conversion(request):
    if request.method == "POST":
        blob = request.data.__getitem__('audio_data').file.read()
        if os.path.exists(FILE_NAME):
            os.remove(FILE_NAME)
        with open(FILE_NAME, mode='bx') as f:
            f.write(blob)
        gen, critic, siam, _ = get_networks(shape, load_model=True,
                                                              path='ckpts')
        output = wav_to_wav('../../' + FILE_NAME)
        return HttpResponse("hello")
