class DestinationsController < ApplicationController
  def create
    destination = Destination.create(address: destination_params[:address], city: destination_params[:city], country: destination_params[:country])
    destination.trips.create(destination_params[:trips_attributes])
    render json: DestinationSerializer.new(destination)
  end

  def index
    destinations = Destination.all
    render json: DestinationSerializer.new(destinations)
  end

  def destination_params
    params.require(:destination).permit(:address, :city, :country, trips_attributes: [:occasion], images: [])
  end
end
