require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        { player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        { player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        { player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        { player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        { player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        { player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        { player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        { player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        { player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        { player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def get_player_info(player_name)
  game_hash.each do |team, team_info|
    # go through each player
    team_info[:players].each do |player_hash|
      # find the player whose name matches
      if player_hash[:player_name] == player_name
        return player_hash
      end
    end
  end
end

def num_points_scored(player_name)
  # gets number of points scored by given player
  player_hash = get_player_info(player_name)
  player_hash[:points]
end

def shoe_size(player_name)
  # gets shoe size of given player
  player_hash = get_player_info(player_name)
  player_hash[:shoe]
end

def team_colors(team_name)
  # go over the teams
  game_hash.each do |location, team_info|
    # location is key e.g. :home
    # team_info is hash of that team
    # find the one that matches given parameter
    if team_info[:team_name] == team_name
      # return team_colors
      return team_info[:colors]
    end
  end
end

def team_names
  # returns team names
  game_hash.map do |location, team_info|
    team_info[:team_name]
  end
end

def player_numbers(team_name)
  game_hash.each do |location, team_info|
    # binding.pry
      if team_info[:team_name] == team_name
        # binding.pry
        player_number_array = team_info[:players].map do |player_info_hash|
          player_info_hash[:number]
        end
        return player_number_array
      end
  end
end

def player_stats(player_name)
  player_info = get_player_info(player_name)
  player_info.delete(:player_name)
  player_info
end
















