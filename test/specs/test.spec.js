const assert = require('assert');

describe("Test suite", () => {

    it('Check page title', async () => {
        await browser.url('https://www.epam.com/');
        const pageTitle = await browser.getTitle();

        expect(pageTitle).toEqual("EPAM | Software Engineering & Product Development Services");
    });
    
    it('Check if EPAM Logo is Displayed', async () => {
        await browser.url('https://www.epam.com/');
        const logo = await $('//img[@class="header__logo header__logo-light"]');
        const isLogoDisplayed = await logo.isDisplayed();
        assert.strictEqual(isLogoDisplayed, true, 'Logo should be displayed');
    });
    
    it('Check Main Menu Items Count', async () => {
        await browser.url('https://www.epam.com/');
        const menuItems = await $$('nav.hamburger-menu__dropdown a');
        const itemCount = menuItems.length;
        expect(itemCount).toBeGreaterThanOrEqual(5);
    });

    it('Verify Footer Contains "Privacy Policy" Link', async () => {
        await browser.url('https://www.epam.com/');
        const privacyPolicyLink = await $('a[href*="privacy-policy"]');
        const isPrivacyPolicyDisplayed = await privacyPolicyLink.isDisplayed();
        expect(isPrivacyPolicyDisplayed).toBe(true);
    });
})