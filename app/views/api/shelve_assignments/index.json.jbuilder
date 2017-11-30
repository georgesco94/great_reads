@assignments.each do |assignment|
  json.set! assignment.id do
    json.partial! 'api/shelve_assignments/shelve_assignment', assignment: assignment
  end
end
