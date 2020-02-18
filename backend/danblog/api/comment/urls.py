from django.urls import path

from . import views
import six 

urlpatterns = [
    path('', views.PostListView.as_view()),
    path('create/<slug>/', comment_views.comment_create_view),
]   