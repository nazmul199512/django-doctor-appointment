from django import forms
from .models import Appointment, TakeAppointment


class CreateAppointmentForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(CreateAppointmentForm, self).__init__(*args, **kwargs)
        self.fields['full_name'].label = "Full Name"
        self.fields['image'].label = "Image"
        self.fields['department'].label = "Department"
        self.fields['start_time'].label = "Start Time"
        self.fields['hospital_name'].label = "Hospital Name"
        self.fields['qualification_name'].label = "Qualification"
        self.fields['institute_name'].label = "Institute"
        self.fields['created_at'].label = "Created At"

        self.fields['full_name'].widget.attrs.update(
            {
                'placeholder': 'Enter Full Name',
            }
        )

        self.fields['department'].widget.attrs.update(
            {
                'placeholder': 'Select Your Service',
            }
        )

        self.fields['start_time'].widget.attrs.update(
            {
                'placeholder': 'Ex : 9 AM',
            }
        )
        self.fields['end_time'].widget.attrs.update(
            {
                'placeholder': 'Ex: 5 PM',
            }
        )
        self.fields['location'].widget.attrs.update(
            {
                'placeholder': 'Ex : Uttara, Dhaka',
            }
        )

        self.fields['hospital_name'].widget.attrs.update(
            {
                'placeholder': 'Enter Hospital Name',
            }
        )

        self.fields['qualification_name'].widget.attrs.update(
            {
                'placeholder': 'Ex : MBBS, BDS',
            }
        )

        self.fields['institute_name'].widget.attrs.update(
            {
                'placeholder': 'Ex : DMC',
            }
        )

    class Meta:
        model = Appointment
        exclude = ('user',)
        fields = ['full_name', 'image', 'department', 'start_time', 'end_time', 'location',
                  'hospital_name', 'qualification_name', 'institute_name', 'created_at']

    def is_valid(self):
        valid = super(CreateAppointmentForm, self).is_valid()

        # if already valid, then return True
        if valid:
            return valid
        return valid

    def save(self, commit=True):
        appointment = super(CreateAppointmentForm, self).save(commit=False)
        if commit:
            appointment.save()
        return appointment


class TakeAppointmentForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(TakeAppointmentForm, self).__init__(*args, **kwargs)
        self.fields['full_name'].label = " Full Name"

        self.fields['date'].label = "Date"
        self.fields['message'].label = "Message"

        self.fields['full_name'].widget.attrs.update(
            {
                'placeholder': 'Enter Full Name',
            }
        )

        self.fields['date'].widget.attrs.update(
            {
                'placeholder': 'Enter Date',
            }
        )
        self.fields['message'].widget.attrs.update(
            {
                'placeholder': 'Short note about your problem',
            }
        )

    class Meta:
        model = TakeAppointment
        fields = ['full_name', 'date', 'message']

    def is_valid(self):
        valid = super(TakeAppointmentForm, self).is_valid()

        # if already valid, then return True
        if valid:
            return valid
        return valid

    def save(self, commit=True):
        t_appointment = super(TakeAppointmentForm, self).save(commit=False)
        if commit:
            t_appointment.save()
        return t_appointment
