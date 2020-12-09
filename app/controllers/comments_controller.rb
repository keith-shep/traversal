class CommentsController < ApplicationController
  def new
    @step = Step.find(params[:step_id])
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @step = Step.find(params[:step_id])
    @comment.step = @step
    if @comment.save
      redirect_to equation_path(@step.equation)
    else
      render :new
    end
  end

  def destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:message)
  end
end
