class MoviesController < ApplicationController

    def index
        @movies = Movie.all.order(updated_at: :desc) 
        render json: @movies
    end
end
