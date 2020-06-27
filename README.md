# Favicon Count Base
This repo conatins a set of functions to draw numbers on website favicons. I
use it in browser extensions for adding the unread count of items to a site's
favicon (e.g., adding your unread mail), which is especially useful for pinned
tabs.

It is used in extensions for the following sites:
* Fastmail: [chrome](https://chrome.google.com/webstore/detail/fastmail-favicon-count/edphkeodanpjkllbfopplbdpofglfpdm) and [firefox](https://addons.mozilla.org/en-US/firefox/addon/fastmail-favicon-count/)
* Newsblur: [chrome](https://chrome.google.com/webstore/detail/newsblur-favicon-count/aljiepkbclfgfjnmlaehmfjcjeigkeag) and [firefox](https://addons.mozilla.org/en-US/firefox/addon/newsblur-favicon-count/)

## API

The compiled package is available at `dist/main.js` (the source can be found at
`src/index.js`. To use the package, import it, make a new class, then run
`render` as you wish!

```.js
import FaviconCount from "dist/main";

const faviconDrawer = new FaviconCount();
faviconDrawer.render(1);
```

If the package is unable to find a favicon on the page, it will do nothing. If
a non-numeric input is passed, it will render the site's favicon.
