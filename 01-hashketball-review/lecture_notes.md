- explain "Flipped Classroom":  We expect you to see the material before lecture (although not master)

- emphasize asking questions, feeling stupid, saying "I don't know"

- Don't code along unless instructed to

- Video and code made available after lecture

- rspec; rspec --fail-fast
    - can run a specific file: `spec/rspec hashketball_spec.rb`
    - or a specific test: `spec/rspec hashketball_spec.rb:29`

- Programmers are lazy, by design

- Don't cut and paste, both for understanding and for muscle memory

- TDD

- Don't do too much at once--tight feedback loop.  Success is often defined as a new error.

- My data is set up differently:  Players are an array of hashes as opposed to one hash with player names as keys

- Define `num_points_scored`.  When you get to the second test, a lot of code is going to end up being repeated.  Define `get_all_players` and `get_player_info` as "helper methods"

- Discuss map vs each, select vs find.  Do some examples with numbers and stuff

```
instructors = [
  {name: "Paul", college: "Rutgers"},
  {name: "Morgan", college: "BYU"},
  {name: "Melanie", college: "Michigan"}
]

colleges = instructors.map do |instructor|
  instructor[:college]
end

colleges
```

`map` for when you are returning an array of equal size

`each` returns the original array

`select` returns an array of all matching elements

`find` returns first

- Build helper methods:

```
def get_all_players
# returns array of each player's hash
  game_hash.values.map do |team|
    team[:players]
  end.flatten

end

def get_player_info(name)
# takes a name and returns the hash for that player
  get_all_players.find {|player| player[:player_name]==name}

end
```

- Define 'refactoring'