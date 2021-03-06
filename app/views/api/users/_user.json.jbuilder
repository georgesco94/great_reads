json.extract! user, :id, :username, :email
json.image_url asset_path(user.image)
json.reviewIds user.reviews.map(&:id)
json.statusIds user.statuses.map(&:id)
json.shelfIds user.shelfs.map(&:id)
