class Api::BooksController < ApplicationController
  def index
    numBooks=3

    if params[:offset]
      offsetInt = params[:offset].to_i
      @books = Book.limit(numBooks).offset(offsetInt)
    elsif params[:searchQuery]
      @books = Book.where("lower(title) LIKE ? OR lower(author) LIKE ?", ("%#{params[:searchQuery]}%").downcase,  ("%#{params[:searchQuery]}%").downcase)
    else
      @books = Book.all()
    end
    render :index
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
    params.require(:book).permit(:title, :description, :author, :image)
  end
end
