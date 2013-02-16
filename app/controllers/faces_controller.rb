class FacesController < ApplicationController

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Face.all }
    end
  end

  def create
    @face = Face.create!(params[:face])

    respond_to do |format|
      format.json { render :json => @face }
    end
  end
end
