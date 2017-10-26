class Api::BooksController < ApplicationController
  def index
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render 'api/books/show'
    else
      render json: @book.errors.full_messages, status: 422
    end
  end

  def show
    @book = Book.find(params[:id])
    render :show
  end

  def update
  end

  def book_params
    params.require(:book).permit(:title, :description, :author)
  end
end
