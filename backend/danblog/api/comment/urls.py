from django.urls import path

from . import views
import six 

urlpatterns = [
    path('', views.PostListView.as_view()),
] 