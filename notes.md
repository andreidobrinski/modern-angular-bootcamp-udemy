# Modern Angular Bootcamp

## Files Types

1. Component Template. `app.component.html`. Contains the HTML that gets displayed to the user.
2. Component Class. `app.component.ts`. Code that runs events (eg. on button click)
3. Service. `translate.service.ts`. Code that fetches/stores/updates data
4. Module. `app.module.ts`. Defines a set of services and components that handle functionality of a given app.

1:1 mapping of component template to component class files. Can have many:one mapping of component class to service.

## Event Binding Syntax

<button (click)="onButtonClick()" />

- `(click)`: name of event to watch for
- `onButtonClick()`: what function to call. evaluated as code

## Property Binding Syntax

<input [value]="password" />

- `[value]`: name of property we want to set on element
- `password`: name of property in the class. evaluated as code

## Interpolation

`{{ variableName }}` or `{{ callFn() }}`

## Directives

Structural Directive: adds or removes HTML elements. `*ngIf`

Attribute Directives: changes the properties of the HTML element it gets applied to. `appStrikethrough`

## CSS

- CSS in styles.css are applied to the whole app
- CSS in `[something].component.css` is scoped to `something`

## Passing info from parent to child

1. In the parent component, find where we call the child component
2. Decide on the property name we want to use to communicate from parent to child
3. Add a new binding to child component, specifying the data we want to pass down
4. In the child component's class file, add an input property. This tells the child component to expect the parent to provide the value
5. In the child component template file, reference that input property (interpolation)
