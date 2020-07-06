"""
doctor_appointment_system URL Configuration

"""

from django.urls import path
from appointment.views import *
from django.conf import settings
from django.conf.urls.static import static


app_name = 'appointment'

urlpatterns = [

    path('', HomePageView.as_view(), name='home'),
    path('service', ServiceView.as_view(), name='service'),
    path('doctor/appointment/create', AppointmentCreateView.as_view(), name='doctor-appointment-create'),
    path('doctor/appointment/', AppointmentListView.as_view(), name='doctor-appointment'),

    path('<pk>/delete/', AppointmentDeleteView.as_view(), name='delete-appointment'),
    path('<pk>/patient/appointment/take', TakeAppointmentView.as_view(), name='take-appointment'),
    path('search/', SearchView.as_view(), name='search'),
    path('patient/', PatientListView.as_view(), name='patient-list'),


]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
