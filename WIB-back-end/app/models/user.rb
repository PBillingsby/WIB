class User < ApplicationRecord
  has_many :destinations
  has_many :trips
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
end
