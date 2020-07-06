from django.urls import path
from .views import *
from appointment.views import *

app_name = "accounts"

urlpatterns = [
    path('patient/register', RegisterPatientView.as_view(), name='patient-register'),
    path('patient/profile/update/', EditPatientProfileView.as_view(), name='patient-profile-update'),
    path('doctor/register', RegisterDoctorView.as_view(), name='doctor-register'),
    path('doctor/profile/update/', EditDoctorProfileView.as_view(), name='doctor-profile-update'),
    path('login', LoginView.as_view(), name='login'),
    path('logout', LogoutView.as_view(), name='logout'),
]