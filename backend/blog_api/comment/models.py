from django.db import models
from blog_post.models import BlogPost

class Comment(models.Model):
    """Model for the comments in the blog posts"""

    name = models.CharField(max_length=100)
    email = models.EmailField()
    body = models.TextField()
    parent_post = models.ForeignKey(BlogPost, on_delete=models.CASCADE,
        related_name='comments', related_query_name='comment')
    is_displayed = models.BooleanField(default=True)
    published_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Post - "{self.parent_post.title}", Body - "{self.body}"'