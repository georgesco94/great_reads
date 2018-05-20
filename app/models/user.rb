# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  email              :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :image, default_url: "default_user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token

  has_many :reviews,
    foreign_key: :user_id,
    class_name: "Review"

  has_many :shelfs,
    foreign_key: :user_id,
    class_name: "Shelf"

  has_many :statuses,
    foreign_key: :user_id,
    class_name: "Status"

  has_many :shelve_assignments,
    through: :shelfs,
    source: :shelve_assignmets

  has_many :books,
    through: :shelfs,
    source: :books

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    (user && user.is_password?(password)) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def get_recommended_books
    recommended_genres = get_recommended_genres
    debugger

    same_genre_books = Book.all.select do |book|
      book.genres.any? do |genre|
        recommended_genres.include?(genre)
      end

    end

    same_genre_books.map{|b|b.title}


  end

  private
  def read_books
    read_books = shelfs.select {|s| s.name == 'read'}.first.books
  end

  def get_recommended_genres
    read_genres = read_books.map { |book| book.genres}
  end

  def ensure_session_token
    (self.session_token = SecureRandom.urlsafe_base64) unless self.session_token
  end
end
