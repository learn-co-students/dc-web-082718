# Ice Cream Maker JS Practice

Currently the index.html page has a script tag to ```demo.js``` so that you can see a demo of the finished app. Comment out the script tag ```demo.js``` and uncomment out the script tag to ```index.js``` where you will code your solution

## Getting Started

If you haven't yet, install json-server
```bash
npm install -g json-server
```

Then run the server with
```bash
json-server data.json
```

## API methods

GET all ice cream data

```
http://localhost:3000/ice_cream
```

GET a single ice cream data

```
http://localhost:3000/ice_cream/:id
```

GET all ingredients

```
http://localhost:3000/ingredient
```

POST a single ice cream


```
http://localhost:3000/ice_cream
```
```
headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
```
```
body: JSON.stringify({"name": newIceCreamName, "ingredients": [1,2,3]})
```

PATCH a single ice cream

```
http://localhost:3000/ice_cream/:id
```
```
headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}
```
```
body: JSON.stringify({"name": newIceCreamName, "ingredients": [1,2,3]})
```

DELETE a single ice cream

```
http://localhost:3000/ice_cream/:id
```
