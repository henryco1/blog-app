from django.db import models

# Create your models here.
class BlogPost(models.Model):
    """Model for blog posts"""

    title = models.CharField(max_length=100)
    body = models.TextField()