## [React Router](https://reacttraining.com/react-router/web/guides/quick-start)

### React vs Rails Routing (Client vs. Server)
- window.history .pushState() .back() .forward() .go()

### Set Up
- `npm install --save react-router-dom`

### BrowserRouter
- Will use 1 place in our application (and one place only) at the very top level
- Sometimes aliased

### Route
- Conditionally render a certain component based on if the path of the url matches the path prop
- What if we leave out the path prop?

### Link and NavLink
- Changes the url we see in the browser without a reload, must have a 'to' prop
- Re-renders components based on new url

### Nested Routes `/:id`

### Switch
- Pick one of the following routes (the first that matches) and load that component
- Don't look at the others (like an if/ else if/ else if)
- Takes in no props
