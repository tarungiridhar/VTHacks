from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
import json
from django.contrib.auth.models import User #####
from django.http import JsonResponse , HttpResponse ####


def index(request):
    return HttpResponse("Hello, world. You're at the voice your vote index.")


def get_gpt_response(request):
    topic = request.GET.get('topic', None)

    print('topic:', topic)

    data = {
        'response': "",
        'raw': 'Successful',
    }

    print('json-data to be sent: ', data)

    return JsonResponse(data)