class orange {
    constructor(page) {
        this.page=page
        this.username=page.locator('//input[@name="username"]')
        this.password=page.locator('//input[@type="password"]')
        this.submit=page.locator('//button[@type="submit"]')
    }
    
    async login(uname,pword){
        await this.username.fill(uname)
        await this.password.fill(pword)
        await this.submit.click();
    }
    }
    export default orange
    
