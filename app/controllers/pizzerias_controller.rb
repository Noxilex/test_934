class PizzeriasController < ApplicationController
  layout "pizzerias"
  def index
    @hello_world_props = { name: "Stranger" }
  end
end
