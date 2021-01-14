# Modern Angular Bootcamp

## Files Types

1. Component Template. `app.component.html`. Contains the HTML that gets displayed to the user.
2. Component Class. `app.component.ts`. Code that runs events (eg. on button click)
3. Service. `translate.service.ts`. Code that fetches/stores/updates data
4. Module. `app.module.ts`. Defines a set of services and components that handle functionality of a given app.

1:1 mapping of component template to component class files. Can have many:one mapping of component class to service.

## Event Binding Syntax

<button (click)="onButtonClick()" />
`click`: name of event to watch for
`onButtonClick()`: what function to call. evaluated as code
