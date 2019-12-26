from rest_framework import generics
from .serializers import BlogPostListSerializer, BlogPostDetailSerializer
from blog_post.models import BlogPost

class BlogPostListView(generics.ListAPIView):
    """
    View list of all published posts
    """

    queryset = BlogPost.objects.filter(is_published=True)
    serializer_class = BlogPostListSerializer
    lookup_field = 'slug'

class BlogPostDetailView(generics.RetrieveAPIView):
    """
    View infromation about a single post
    """

    queryset = BlogPost.objects.all()
    serializer_class = BlogPostDetailSerializer
    lookup_field = 'slug'