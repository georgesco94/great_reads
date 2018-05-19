# == Schema Information
#
# Table name: genres
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Genre < ApplicationRecord
  
end
