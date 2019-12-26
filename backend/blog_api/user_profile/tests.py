from django.test import TestCase
# from .models import UserProfile
# from django.contrib.auth import get_user_model

# # Create your tests here.
# class UserProfileModelTest(TestCase):

#     def setUp(self):
#         # initialize an instance of the default django user model
#         User = get_user_model()
#         User.objects.create_user(
#             username="testuser",
#             email="test@test.com", 
#             password="test"
#         )
#         self.test_user = User.objects.get(id=1)

#         # test creating the custom implementation of the django user
#         self.test_website = "https://blog.com"
#         self.test_bio = "I am a test user"
#         self.test_country = "Aland Islands"
#         self.test_UserProfile = UserProfile.objects.create(
#             user=self.test_user,
#             website=self.test_website,
#             bio=self.test_bio,
#             country=self.test_country
#         )

#     def tearDown(self):
#         self.test_user.delete()
#         self.test_UserProfile.delete()


#     def test_create_user_profile(self):
#         pass
        # self.assertEqual(self.test_user.email, 'test@test.com')
        # self.assertTrue(test_user.is_active)
        # self.assertEquals(test_website, f'{test_user_profile.website}')
        # self.assertEquals(test_bio, f'{test_user_profile.bio}'
        # self.assertEquals(test_country, f'{test_user_profile.country}')

    # def test_create_user_profile(self):
    #     # # test creating a default django user model
    #     # User = get_user_model()
    #     # test_user = User.objects.create_user(
    #     #     username="testuser",
    #     #     email="test@test.com", 
    #     #     password="test"
    #     # )
    #     # self.assertEqual(test_user.email, 'test@test.com')

    #     # # test creating the custom implementation of the django user
    #     # test_website = "https://blog.com"
    #     # test_bio = "I am a test user"
    #     # test_country = "Aland Islands"
    #     # UserProfile.objects.create(
    #     #     user=test_user,
    #     #     website=test_website,
    #     #     bio=test_bio,
    #     #     country= test_country
    #     # )
    #     test_user_profile = UserProfile.objects.get(id=1)
    #     self.assertTrue(test_user.is_active)
    #     self.assertEquals(test_website, f'{test_user_profile.website}')
    #     self.assertEquals(test_bio, f'{test_user_profile.bio}'
    #     self.assertEquals(test_country, f'{test_user_profile.country}')


        