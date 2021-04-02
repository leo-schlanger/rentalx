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

