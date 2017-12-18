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

  def destroy
    shelve_assignment = ShelveAssignment.find(params[:id].to_i)
    book_id = shelve_assignment.book_id
    status = Status.where(book_id: book_id, user_id:current_user.id).first
    status.destroy
    shelve_assignment.destroy
    @assignments = User.find(current_user.id).shelve_assignments
    render 'api/shelve_assignments/index'
  end


  def assignment_params
    params.require(:assignment).permit(:book_id, :shelf_id)
  end

end
