from rest_framework import serializers
from blog_post.models import BlogPost
from api.comment.serializers import CommentSerializer

class BlogPostListSerializer(serializers.ModelSerializer):
    """DRF serializer that lists all blog posts"""

    total_comments = serializers.IntegerField()
    author_full_name = serializers.CharField()

    class Meta:
        """
        This class lists all the data we want to return when displaying a list
        """
        model = BlogPost
        fields = [
            'slug',
            'title',
            'author_full_name',
            'published_on',
            'short_description',
            'total_comments',
        ]

class BlogPostDetailSerializer(serializers.ModelSerializer):
    """
    DRF serializer for details of the blog posts
    """

    comments_list = CommentSerializer(many=True)
    total_comments = serializers.IntegerField()
    author_full_name = serializers.CharField()

    class Meta:
        """
        This class lists data we want to return when
        """
        model = BlogPost
        fields = [
            'slug',
            'title',
            'body',
            'author_full_name',
            'published_on',
            'comments_list',
            'short_description',
            'total_comments'
        ]


