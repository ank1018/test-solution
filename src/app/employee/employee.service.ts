import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class EmpService {
  public empArray = [
    {
      "id": 1,
      "name": "Bob",
      "phone": "9999999999",
      "address":
      {
      "city": "Pune",
      "address_line1":"ABC road",
      "address_line2":"XYZ building",
      "postal_code":"12455"
      }
      },
    {
    "id": 1,
    "name": "Jhon",
    "phone": "9999999999",
    "address":
    {
    "city": "Pune",
    "address_line1":"ABC road",
    "address_line2":"XYZ building",
    "postal_code":"12455"
    }
    }, {
    "id": 2,
    "name": "Jacob",
    "phone": "",
    "address":
    {
    "city": "Pune",
    "address_line1":"PQR road",
    "address_line2":"ABC building",
    "postal_code":"13455"
    }
    }, {
    "id": 3,
    "name": "Ari",
    "phone": "145458522",
    "address":
    {
    "city": "Mumbai",
    "address_line1":"ABC road",
    "address_line2":"XYZ building",
    "postal_code":"12455"
    }
    }]
}
