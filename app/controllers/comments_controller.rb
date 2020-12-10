class CommentsController < ApplicationController
  def index
    @step = Step.find(params[:step_id])
    @comments = Comment.all
  end

  def new
    @step = Step.find(params[:step_id])
    @comment = Comment.new
  end

  def create
    @comment = Comment.new(comment_params)
    @step = Step.find(params[:step_id])
    @comment.step = @step
    @comment.user = current_user
    if @comment.save
      redirect_to step_comments_path(@step)
    else
      render :new
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    redirect_to step_comments_path(@comment.step)
  end

  private

  def comment_params
    params.require(:comment).permit(:message)
  end
end
