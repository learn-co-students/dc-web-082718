class Patient < ActiveRecord::Base
  # attr_accessor :doctor - define methods

  belongs_to :doctor
  # belongs_to :hospital, through: :doctor
  
  delegate :hospital, to: :doctor

  # def doctor
  #   Doctor.find(doctor_id)
  # end

  # def doctor=
  #
end
