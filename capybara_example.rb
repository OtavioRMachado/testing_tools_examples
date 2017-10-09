require 'capybara'
require 'capybara/dsl'
require 'capybara/rspec'
require 'selenium-webdriver'

describe 'Capybara' do
  include Capybara::DSL

  before do
    Capybara.configure do |config|
      config.run_server = false
      config.default_driver = :selenium_chrome
      config.app_host = 'http://google.com/'
    end
  end

  it 'searches my name on google' do
    visit '/'
    fill_in 'q', with: "otaviormachado github"
    click_on 'Pesquisa Google'
    expect(page).to have_content('https://github.com/OtavioRMachado')
  end
end
