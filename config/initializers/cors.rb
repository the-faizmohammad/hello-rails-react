Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://[::1]:3000' # Replace with your frontend's actual origin
    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
