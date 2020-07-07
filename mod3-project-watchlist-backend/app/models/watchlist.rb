class Watchlist < ApplicationRecord
  belongs_to :viewer
  belongs_to :movie
end
