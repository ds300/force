import { RootTestPage } from "v2/DevTools/RootTestPage"

export class IdentityVerificationAppTestPage extends RootTestPage {
  get startVerificationButton() {
    return this.find("button").filterWhere(btn =>
      btn.text().includes("Continue to verification")
    )
  }

  get finishButton() {
    return this.find("button").filterWhere(btn => btn.text().includes("Finish"))
  }

  get contactSupportButton() {
    return this.find("button").filterWhere(btn =>
      btn.text().includes("Contact support")
    )
  }

  get returnHomeButton() {
    return this.find("button").filterWhere(btn =>
      btn.text().includes("Return home")
    )
  }

  async clickStartVerification() {
    this.startVerificationButton.simulate("click")
    await this.update()
  }
}
