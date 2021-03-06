# coding: utf-8

require 'rubygems'
require 'sinatra'
require 'sinatra/content_for'
require 'sinatra/base'
require 'rack-flash'

enable :sessions
use Rack::MethodOverride
use Rack::Flash

before do
  @layout = false if request.xhr?
end

helpers do
  def title(title_str = nil)
    @title = title_str || "Bastardi - Nový český film z prostředí praktického školství"
  end

  def description(description_str = nil)
    @description = description_str || "Příběh z prostředí praktického školství. Bez povrchností, klišé a přetvářek."
  end

  def checked?(option, answer)
    'checked' if answer && option == answer
  end
end

get '/' do
  haml :index, :layout => false
end

get '/index.html' do
  haml :index, :layout => false
end

get '/web.html' do
  haml :web
end

get '/o_filmu.html' do
  haml :o_filmu, :layout => @layout
end

get '/aktuality.html' do
  haml :aktuality, :layout => @layout
end

get '/herci.html' do
  haml :herci, :layout => @layout
end

get '/partneri.html' do
  haml :partneri, :layout => @layout
end

get '/z_nataceni.html' do
  haml :z_nataceni, :layout => @layout
end

get '/pro_kina.html' do
  haml :pro_kina, :layout => @layout
end

get '/promitani.html' do
  haml :promitani, :layout => @layout
end

get '/eshop.html' do
  haml :eshop, :layout => @layout
end
