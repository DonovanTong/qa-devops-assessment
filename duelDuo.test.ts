
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('draw is displayed', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.id('draw')).click()
    const choices = driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('Div is displayed with id "duel-duo" after a card is added to duo', async () => {
    await driver.sleep(1000)
    await driver.findElement(By.id('draw')).click()
    await driver.sleep(1000)
    await driver.findElement(By.css('.bot-btn')).click()
    await driver.sleep(1000)
    const duo = driver.findElement(By.id('player-duo'))
    const select = await duo.isDisplayed()
    expect(select).toBe(true)
})