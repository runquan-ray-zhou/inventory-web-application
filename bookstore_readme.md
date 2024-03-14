
## Completion

### Set up

1. Create a GitHub repository.
1. Your GitHub repository should have a `README.md` file with setup instructions and a guide on how to run your application.

### Styling

3. The page should have a cohesive and professional style, that makes use of a few specific colors.
1. The page should make use of CSS Grid, and include at least two columns.
1. The page should have at least one responsive element on the page that changes depending on the screen's size.
1. You can choose to implement your own design or copy the one in the examples below

### On Load Features

6. Users can see a header on the top of the page that includes a title for the web application.
1. Users can see 5 unique resources, that include the following fields and at least two others:
   1. name
   1. price
   1. in stock
   2. Your choice of resource
   2. Your choice of resource
1. Users can see a "Remove" button associated with each resource.
1. Users can see a form that includes all fields for each resource, a "Submit" button, and a "Reset" button.

### Interactive Features

10. When a user clicks on the "Remove" button for each resource, that resource is removed from the page.
1. The user should have a way to update the "in stock" value for existing resources. An interaction should change the resource from being "in stock" to "out of stock," and vice versa.
---When you click remove, you remove a stock count of the same book. if stock count go to zero. book is removed from list.
---When you click submit, if there are no book in stock, adds to list of resource with updated price.  if the same book is already in stock, update stock count.
1. The form should require at least three of the fields of the resource to be required. If the "Submit" button is clicked and those requirements are not met, an error message should be shown to the user telling them exactly what is wrong. The form fields should stay filled in and a resource should not be created.
1. When the "Reset" button is clicked, the form should be cleared.
1. When the form is completed correctly, the form should be cleared and a new resource should appear at the top of all previous resources.

### Mastery rubric

This section of the project is designed to measure your increasing skill at writing good code and following best practices.

To view components of the mastery rubric, view the appropriate assignment on Canvas.

### Stretch goals

This section of the project measures your ability to go above and beyond in creating your project. To score points in this section, you should incorporate a feature, technology, or skill not explicitly required by the project instructions.

When you submit your pull request, _make sure to include a description of any stretch goals you implemented._ You may choose from the list below or come up with features or tasks that are more relevant to your specific implementation of the project in conjunction with your coach.

- When a resource is clicked, the element is expanded and more information is displayed.
- If a field is missing a value, provide a default value when a resource is created on the page.
- Allow for the ability to edit existing resources, by using the already existing form.
- Incorporate complex CSS properties like [transition effects](https://css-tricks.com/almanac/properties/t/transition/).
- Create a Footer that sticks to the bottom of the browser window even if all elements have been removed.
- Use [local Storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) to save information and have it persist between refreshes