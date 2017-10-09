require 'watir'
require_relative 'spec_helper'

extend RSpec::Matchers

describe "Google search example" do
  it "seaches my name in Google" do
    browser = Watir::Browser.new
    browser.goto 'google.com'
    browser.text_field(title: 'Pesquisar').set("otaviormachado github")
    browser.input(type: 'submit').click
    expect(browser.text).to include "https://github.com/OtavioRMachado"
    browser.close
  end
end
