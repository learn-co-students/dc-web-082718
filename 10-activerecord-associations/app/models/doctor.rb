class Doctor < ActiveRecord::Base
  # save
  # update
  # delete
  # find
  # create = new + save
  has_many :patients
  belongs_to :hospital

  # def patients
    # Patient.where(doctor_id: self.id)
  # end
end
