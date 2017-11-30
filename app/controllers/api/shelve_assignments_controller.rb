class Api::ShelveAssignmentsController < ApplicationController


  def index
    @assignments = ShelveAssignment.all()
    if (params[:userId])
      @assignments = User.find(params[:userId].to_i).shelve_assignments
    end

  end

  def update
    @assignment = ShelveAssignment.find(params[:assignmentId].to_i)
    if @assignment.update(assignment_params)

      render 'api/shelve_assignments/show'
    end
  end



  def assignment_params
    params.require(:assignment).permit(:book_id, :shelf_id)
  end

end
