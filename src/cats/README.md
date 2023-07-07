## in nestjs DTOs, it stands for Data Transfer Object

DTOs are dumb objects that are used to pass data between different layers of the application
DtOs are used to define the shape of the data that is passed around
DTOs are used to validate data
DTOs are used to define the shape of the data that is stored in the database
DTOs are used to define the shape of the data that is sent to and from the client
DTOs are used to define the shape of the data that is sent to and from the server
DTOs are used to define the shape of the data that is sent to and from the database

## (MVC) Model object:

represent some things in a some usage context eg. PersonEditModel, PersonViewModel or just PersonModel
has no business logic
can be subject of some valdation logic etc.
used to provide data from one application layer to another eg. MVC Controller <-> MVC View

## Domain object:

represents some business object (real world object in the problem domain)
has business logic
do not allow invalid object state, has methods to properly change object's state
used to encapsulate business logic related to it
have not to be used to persist data (or even should not)

## DTO (Data Transfer Object):

similar to Model object but should have flat structure
only simple type properties/fields (strings, numbers, datetimes, booleans)
used to transfer data cross application boundaries eg. between web server and web browser
