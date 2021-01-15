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
