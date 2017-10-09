const { Chromeless } = require('chromeless')

async function run() {
  const chromeless = new Chromeless()

  const screenshot = await chromeless
    .goto('http://www.google.com')
    .type('otaviormachado github', 'input[name="q"]')
    .click('input[name="btnG"]')
    .wait('#resultStats')
    .screenshot()

    console.log(screenshot)



  await chromeless.end()
}

run().catch(console.error.bind(console))
