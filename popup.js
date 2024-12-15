document.addEventListener('DOMContentLoaded', function () {
  let checkbox_redirectToOriginalImage = document.getElementById('redirectToOriginalImage');
  let checkbox_useOldAccept = document.getElementById('useOldAccept');
  let checkbox_disableLightbox = document.getElementById('disableLightbox');

  // Get the current enabled setting from storage
  chrome.storage.local.get('redirectToOriginalImage', (res) => {
    checkbox_redirectToOriginalImage.checked = res.redirectToOriginalImage;
  });
  chrome.storage.local.get('useOldAccept', (res) => {
    checkbox_useOldAccept.checked = res.useOldAccept;
  });
  chrome.storage.local.get('disableLightbox', (res) => {
    checkbox_disableLightbox.checked = res.disableLightbox;
  });

  // Update the setting in storage when the checkbox is changed
  checkbox_redirectToOriginalImage.addEventListener('change', function () {
    chrome.storage.local.set({
      redirectToOriginalImage: checkbox_redirectToOriginalImage.checked,
    });
  });
  checkbox_useOldAccept.addEventListener('change', function () {
    chrome.storage.local.set({
      useOldAccept: checkbox_useOldAccept.checked,
    });
  });
  checkbox_disableLightbox.addEventListener('change', function () {
    chrome.storage.local.set({
      disableLightbox: checkbox_disableLightbox.checked,
    });
  });
});
