class AnswersController < ApplicationController
    def index
        @answers = Answer.all 
        render json: @answers
    end

    def create
        @answer = Answer.create(answer_params)
        render json: @question
    end


    private
    def answer_params
        params.require(:answer).permit(:content)
    end
end
