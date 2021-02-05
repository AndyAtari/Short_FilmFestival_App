class AnswersController < ApplicationController
    def index
        @answers = Answer.all 
        render json: @answers
    end

    def create
        @answer = Answer.create(answers_params)
        render json: @answer
    end


    private
    def answers_params
        params.require(:answer).permit(:content, :question_id, :id)
    end
end
