json.poke do
  json.id @pokemon.id
  json.name @pokemon.name
  json.attack @pokemon.attack
  json.defense @pokemon.defense
  json.image_url asset_path(@pokemon.image_url)
  json.moves @pokemon.moves
  json.poke_type @pokemon.poke_type
end
