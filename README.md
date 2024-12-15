# Load Reddit Images Directly
Chrome web extension that loads reddit images directly instead of redirecting to the HTML page containing the image. This works for i.redd.it, preview.redd.it and external-preview.redd.it urls. Additionally, requests to www.reddit.com/media?url=$IMAGE_URL (i.e., the before-mentioned HTML page) are automatically redirected to $IMAGE_URL (i.e., the direct image url).

Note: a redirect to the original (high-res) image URL (the i.redd.it URL) can be preferred over the preview URL by changing the extension setting.

## Installation
This fork simply ports the code of the original extension to work on chromium-based browsers. However due to Chrome deprecating the v2 manifest, I cannot publish it on the extension store.

0. Download this repository via the green `<> Code ▾` button and extract the .zip somewhere convenient.
1. Go to `chrome://extensions` (or open the page via the "Manage Extensions" setting)
2. Enable `Developer mode` in top right corner
3. Click `Load Unpacked` in top left
4. Select and upload the unzipped folder (the inner one containing the `.js`, `.html` and `.json` files)
    - Chrome will show an error and complain that "Manifest version 2 is deprecated". This can be safely ignored.
