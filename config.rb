page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

# Build-specific configuration
configure :build do
  # Minify CSS on build
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets

end

activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.build_before = true
end

# Google Analytics Reprogrma
activate :google_analytics do |ga|
  ga.tracking_id = 'UA-77865189-1'
end
