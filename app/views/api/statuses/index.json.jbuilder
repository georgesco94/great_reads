@statuses.each do |status|
  json.set! status.id do
    json.partial! 'api/statuses/status', status: status
  end
end
