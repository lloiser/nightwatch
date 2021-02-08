const JsonWire = require('./jsonwire.js');

class Selenium2Protocol extends JsonWire {
  get defaultPathPrefix() {
    return '/wd/hub';
  }

  getElementId(resultValue) {
    if (resultValue[Selenium2Protocol.WEB_ELEMENT_ID] !== undefined) {
      return resultValue[Selenium2Protocol.WEB_ELEMENT_ID];
    }

    return resultValue.ELEMENT;
  }
  toElement(value) {
    return { [Selenium2Protocol.WEB_ELEMENT_ID]: value };
  }
}

module.exports = Selenium2Protocol;
