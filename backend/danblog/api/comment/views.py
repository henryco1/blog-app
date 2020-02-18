from django.shortcuts import get_object_or_404

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import CommentSerializer, CreateCommmentSerializer
from comment.models import Comment
from post.models import Post

@api_view(['GET'])
def comment_list_view(request, slug):
    """
    Get post comments from a server

    Selects the post instance matching the comment slug and then
    gets all displayed comments that match that post instance.
    Then we pass the objects we want to use into the serializer. 
    The serializer will take that information and turn into an 
    input the webpage can understand.
    """
    post_instance = get_object_or_404(Post, slug=slug)
    comment_list = Comments.objects.filter(post=post_instance, is_displayed=True)
    serializer = CommentSerializer(comment_list, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def comment_create_view(request, slug):
    """
    Creates a comment via a POST request

    A request object is used to pass state through the system. 
    This function gets the appropriate post object and extracts
    the post response data(?). The serializer then turns that
    data into a format the server can recognize and saves that
    data to the appropriate model.
    """
    post_instance = get_object_or_404(Post, slug=slug)
    request.data['post'] = post_instance.pk
    serializer = CreateCommmentSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
