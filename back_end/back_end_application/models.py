from pyexpat import model
from tkinter import CASCADE
from django.db import models
from phone_field import PhoneField

class Customer(models.Model):
    customerID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, default='')
    email = models.EmailField(('email address'), unique=True)
    phone = PhoneField(blank=True, help_text='Contact phone number')
    shippingAddress = models.CharField(max_length=300, blank=False, default='')

    def __str__(self) -> str:
        return "%s %s" % (self.name, self.email, self.phone, self.shipping_address)

class CustomerOrder(models.Model):
    customerOrderID = models.AutoField(primary_key=True)
    customerID = models.ForeignKey(Customer,on_delete=models.CASCADE)
    date = models.DateTimeField()

    def __str__(self) -> str:
        return "%s %s" % (self.customerOrderID, self.customerID, self.date)

class Product (models.Model):
    productID = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100, blank=False, default='')
    size = models.DecimalField(max_digits=15, decimal_places=5)
    price = models.DecimalField(max_digits=15, decimal_places=5)
    currentStock = models.IntegerField()

    def __str__(self) -> str:
        return "%s %s" % (self.productID ,self.name, self.size, self.price, self.currentStock)

class CustomerOrderContents (models.Model):
    customerOrderContentsID = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self) -> str:
        return "%s %s" % (self.customerOrderContentsID, self.productID, self.quantity)

class BatchStatus (models.Model):
    batchStatusID = models.AutoField(primary_key=True)
    status = models.CharField(max_length=100, blank=False, default='')

class Batch (models.Model):
    batchID = models.AutoField(primary_key=True)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    dateReceived = models.DateTimeField()
    expiryDate = models.DateTimeField()
    quantity = models.IntegerField()
    status = models.ForeignKey(BatchStatus,on_delete=models.CASCADE)





    



