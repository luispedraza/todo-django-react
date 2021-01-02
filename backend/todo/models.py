from django.db import models

# Create your models here.

class Todo (models.Model):
    title = models.CharField(max_length=120)    # Título del recordatorio
    description = models.TextField()            # Contenido del recordatorio
    completed = models.BooleanField(default=False)  # Indica si está completada

    def __str__(self):
        return self.title
