from django.db import models
from django.contrib.auth import get_user_model
from django.dispatch import receiver
from django.db.models.signals import post_save, pre_save
from django.utils import timezone

User = get_user_model()

class BlogPost(models.Model):
    """Model for blog posts"""

    title = models.CharField(max_length=100)
    body = models.TextField()
    short_description = models.TextField(max_length=255)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='posts', related_query_name='post')
    slug = models.SlugField(blank=True, null=True)
    is_published = models.BooleanField(default=False)
    created_on = models.DateTimeField(null=True, blank=True)
    published_on = models.DateTimeField(null=True, blank=True)
    last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    @property
    def comments_list(self):
        """Used by the BlogPost serializer to get all displayed child comments"""
        return self.comments.filter(is_displayed=True)

    @property
    def total_comments(self):
        """Used by the BlogPost serializer to get all child comments"""
        return self.comments_list.count()

    @property
    def author_full_name(self):
        """
        Allows access to the full name of the author object as a data attribute instead 
        of a method
        """
        try:
            return f'{self.author.first_name} {self.author.last_name}'
        except:
            return "Name Not Set"

    class Meta:
        """Sorts the blog posts by date"""
        indexes = [models.Index(fields=['slug'])]
        ordering = ['-published_on']

@receiver(pre_save, sender=BlogPost)
def update_published_on(sender, instance, **kwargs):
    """
    Update the date of 'Published On' when the post gets published. Django's signal dispatcher 
    module allows the receiver of this function to listen for a certain action, which in this
    case is the action of a post getting published
    """

    if instance.id:
        old_value = BlogPost.objects.get(pk=instance.id).published_on
        if not old_value:
            instance.published_on = timezone.now()