# Car registration

**Functional Requirements** 
 - it should be able to register a new car.

**Business Rule** 
 - it should not be able to register a car with an existing license plate.
 - the car should be registered, by default, with availability.
 - the user responsible for the registration must be an administrator user.

 # Car listing

 **Functional Requirements**
  - it should be able to list the available cars.
  - it should be able to list the available cars by category name.
  - it should be able to list the available cars by mark name.
  - it should be able to list the available cars by car name.

 **Functional Requirements** 
  - the user doesn't need to be logged into the system.

 # Registration of specifications on the car
 **Functional Requirements**
  - it should be able to register a specification for a car.

 **Business Rule**
  - it should not be able to register a specification for a car that is not registered.
  - it should not be able to register an existing specification for the same car.
  - the user responsible for the registration must be an administrator user.

 # Car image registration 
 **Functional Requirements**
  - it should be able to register the car image.
  - it should be able to list all cars.

  **Non-functional Requirements**
  - use multer to upload files.

 **Business Rule**
  - the user can register more than one image for the same car.
  - the user responsible for the registration must be an administrator user.

 # Rent car
 **Functional Requirements**
  - it should be able to register a rental.

 **Business Rule**
  - the rental must have a minimum duration of 24 hour.
  - it should not be able to register a rental if there is already an open one for the same user.
  - it should not be able to register a rental if there is already an open one for the same car.
  - the user need logged in application.
  - when making a rental, the car's status should be able to changed to unavailable.

 # Devolution car
 **Functional Requirements**
  - it should be able to return a car. 

 **Business Rule**
  - if the car is returned with less than 24 hours, it must be charged the full day. 
  - when making the return, the car must be released for another rental. 
  - when making the return, the user must be released for another rental.
  - when making the return, the total rent must be calculated.
  - if the return time is longer than the expected delivery time, a fine proportional to the days of delay should be charged. 
  - if there is a fine, it should be added to the rent.
  - the user need logged in application.

# List Rentals

**Functional Requirements**
 - should be able to search for all rentals for the user 

**Business Rule**
 - the user need logged in application.

