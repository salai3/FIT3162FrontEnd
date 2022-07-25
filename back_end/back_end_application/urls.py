from django.urls import path
from back_end_application import views

urlpatterns = [
    path ("",views.home, name = "home")
]
