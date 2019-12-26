from rest_framework import serializers
from comment.models import Comment

class CommentSerializer(serializers.ModelSerializer):
    """
    DRF serializer for returning a list of published comments
    why no filter?
    """

    class Meta:
        model = Comment
        fields = ['name', 'website', 'body', 'published_on']

class CommentCreateSerializer(serializers.ModelSerializer):
    """
    DRF serializer for creating comments by the user
    """

    class Meta:
        model = Commentfields = [
            'name',
            'website',
            'body',
            'post',
            'email',
        ]