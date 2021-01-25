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

- Can only apply one structural directive to an element
- use ng-container to apply an extra structural directive

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

## Pipes

- Functions that format data for use in a template
- Used only in a template
- Built-in pipes + can build custom pipes

## Modules

1. Domain: wraps up all components needed to implement a single feature
2. Routed: same as domain but components are tied to routes
3. Routing: defines routing rules
4. Service: defines a service that will be used in multiple parts of the app
5. Widget: defines some reusabe components that will be used in multiple other modules

**Modules Properties**

1. Declarations: list of components, pipes, directives that are created in the module
2. Imports: list of modules that this module depends on
3. Exports: list of components, pipes, directives that this modules makes available to other modules
4. Providers: old way of connecting modules and services
5. Bootstrap: used by AppModule only to declare what components will be displayed first

## Lifecycle Hooks

1. `ngOnInit`: called once after the component is first displayed on the screen and after Angular has set any properties passed down from the parent
2. `ngOnDestroy`: called once when Angular is about to remove this component
3. `ngOnChanges`: called anytime a property of the component is changed (including when a parent component passes down new data)

## Services

- used to fetch/store/update any kind of data
- almost always where we put network requests
- data flows from service to component
- services are implemented as classes
- angular automatically creates a single instance fo each service for us

## Dependency Injection

@Injectable decorator creates a single instance of a class and passes the instance to use in components.

- components, services etc in angular ask for dependencies rather than creating them directly
- components need other things to work correctly (items from constructor).
  - angular components do not create dependencies directly, ie. `this.thing = new Thing()` is uncommon
  - instead, dependencies are created separately and passed into the app component
- typically done in constuctor, `constructor(private thing: Thing)`
- the goal of dependency injection makes testing components easier
- theoretically makes code reuse and code changes easier

## rxjs

functional reactive programming library

- separate from angular
- used commonly on angular projects for managing data
- used instead of promises or async/await for handling async data

## Angular forms

Reactive forms

- most of the form logic is driven by configuration in a component class file
- most appropriate for complex forms
- exposes some aspects of the form to use as rxjs observables
- need to wire up ReactiveFormsModule to app module to use them

Template forms

- most of the logic is in the component template file
- most appropriate for single forms
- harder to deal with dynamic forms (adding/removing elements)
- need to wire up FormsModule to app module to use them

Input Masking: changing how inputted data looks in the UI. eg. adding a slash or formatting a certain way. Doesn't necessarily change the data stored in the model.

- input masking ngx-mask package treats UI input differently than data input, which may cause issues
