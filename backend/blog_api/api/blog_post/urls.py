from django.urls import path
from . import views

urlpatterns = [
    path('', views.BlogPostListView.as_view()),
    path('view/<slug>/', views.BlogPostDetailView.as_view(), name='post-detail'),
]