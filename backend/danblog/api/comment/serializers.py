from rest_framework import serializers

from comment.models import Comment


class CommentSerializer(serializers.ModelSerializer):
    """DRF Serializer For Listing Published Comment"""

    class Meta:
        model = Comment
        fields = '__all__' 