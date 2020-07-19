class TripsController < ApplicationController
  def index
    trips = Trip.all
    render json: TripSerializer.new(trips)
  end

  def trips_params
    params.require(:trip).permit(images: [])
  end
end
