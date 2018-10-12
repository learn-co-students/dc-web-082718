## SPA (Single Page Applications)
- Making an App in Lecture together

### Mocking your own API
```
json-server --watch db.json
```

### JSON Server Routes
```
GET    /pokemon
GET    /pokemon/1
POST   /pokemon
PUT    /pokemon/1
PATCH  /pokemon/1
DELETE /pokemon/1
```
To POST a new Pokemon:
```
body: JSON.stringify({
  "name": "charmeleon",
  "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
})
```

### GET and POST Pokemon App
- See all Pokemon sprites
- Create your own Pokemon
- [Documentation of using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)

### Notes:
- `body` of a fetch HAS to be a string!!

When <some event happens>, i want to make a <what kind of> fetch call, and manipulate the DOM <in what way?>



#### Announcements:
- we ARE deploying OOJS labs this weekend (weird location)
- but also, use this weekend to catch up on labs
- Skip step two of space station
