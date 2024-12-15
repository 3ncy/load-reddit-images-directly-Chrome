let redirectToOriginalImageEnabled = false;
let useOldAccept = false;

function redirect(details) {
  const url = new URL(details.url);
  const targetURL = url.searchParams.get("url");
  if (targetURL) {
    return {
      redirectUrl: targetURL
    };
  }
}

function redirectToOriginalImage(details) {
  if (redirectToOriginalImageEnabled) {
    var url = new URL(details.url);
    url.hostname = "i.redd.it";
    return {redirectUrl: url.toString()};
  }
}

function modifyAcceptHeader(details) {
  if (useOldAccept) {
    acceptValue = "image/png,image/*;q=0.8,*/*;q=0.5";
  } else {
    acceptValue = "image/avif,image/webp,*/*"
  }
  let newHeaders = details.requestHeaders.map(header => {
    if (header.name.toLowerCase() === 'accept') {
      return {
        name: header.name,
        value: acceptValue
      };
    }
    return header;
  });

  return { requestHeaders: newHeaders };
}

checkSetting();
function checkSetting() {
  chrome.storage.local.get('redirectToOriginalImage', function (result) {
    redirectToOriginalImageEnabled = result.redirectToOriginalImage
  });
  chrome.storage.local.get('useOldAccept', function (result) {
    useOldAccept = result.useOldAccept
  });
}

chrome.storage.onChanged.addListener(checkSetting);

chrome.webRequest.onBeforeRequest.addListener(
  redirect,
  { urls: ["*://www.reddit.com/media*"], types: ["main_frame"] },
  ["blocking"]
);

chrome.webRequest.onBeforeRequest.addListener(
  redirectToOriginalImage,
  { urls: ["*://preview.redd.it/*"], types: ["main_frame"] },
  ["blocking"]
);

chrome.webRequest.onBeforeSendHeaders.addListener(
  modifyAcceptHeader,
  { urls: ['*://i.redd.it/*', '*://external-preview.redd.it/*', '*://preview.redd.it/*'] },
  ['blocking', 'requestHeaders']
);
