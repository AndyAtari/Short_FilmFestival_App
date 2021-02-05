class QuestionsController < ApplicationController

    def index
        @questions = Question.all 
        render json: @questions, include: [:answers]
    end

    def create
        @question = Question.create(questions_params)
        render json: @question
    end


    private
    def questions_params
        params.require(:question).permit(:title)
    end

end
