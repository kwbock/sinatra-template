$LOAD_PATH.unshift File.expand_path(File.dirname(__FILE__))

require 'boot'

class App < Sinatra::Application
  configure do
    set :root, File.dirname(__FILE__)
    set :views, File.join(settings.root, 'app/views')
    set :assets_precompile, %w( application.js application.css )
    set :assets_prefix, %w( app/assets )
  end

  register Sinatra::AssetPipeline

  get "/" do
    erb :index
  end
end
