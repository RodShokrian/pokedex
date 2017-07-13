class Api::PokemonController < ApplicationController
  def index
    @pokemons = Pokemon.all
    render :index
  end

  def create
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
  end

  private
    def pokemon_params
      params.require(:pokemon).permit(:id, :name, :attack, :defense, :poke_type, :moves, :image_url)
    end
end
