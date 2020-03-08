class CommentsController < ApplicationController

  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      redirect_to @comment.post, notice: "Comment saved successfully."
    else
      flash:now[:alert] = @comment.errors.full_messages.to_sentence
      render "posts/show"
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:post_id, :body)
    end
end
