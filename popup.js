document.addEventListener('DOMContentLoaded', function() {
  var goButton = document.getElementById('goButton');
  goButton.addEventListener('click', function() {
    var stackName = document.getElementById('stackNameInput').value.trim();
    if (stackName !== '') {
      var url = 'https://' + stackName + '.splunkcloud.com/en-US/account/login/?loginType=splunk';
      chrome.tabs.create({ url: url });
    }
  });
  var stackNameInput = document.getElementById('stackNameInput');
  stackNameInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      goButton.click();
    }
  });

  var serverButton = document.getElementById('skynet');
  serverButton.addEventListener('click', function() {
    var stackName = document.getElementById('stackNameInput').value.trim();
    if (stackName !== '') {
        var url = 'https://skynet-search.splunkcloud.com/en-US/app/cloudops/stack_overview?form.stack=' + stackName;
        chrome.tabs.create({ url: url });
    }
  });


  var serverButton = document.getElementById('stgConsole');
  serverButton.addEventListener('click', function() {
    var url = 'https://console.splunkcloud.systems/stg/stack';
    chrome.tabs.create({ url: url });
  });
  var serverButton = document.getElementById('DevSkynet');
  serverButton.addEventListener('click', function() {
    var url = 'https://dev-skynet-search.splunkcloud.com/en-US/app/cloudops/stack_overview';
    chrome.tabs.create({ url: url });
  });
  var serverButton = document.getElementById('cloudOkta');
  serverButton.addEventListener('click', function() {
    var url = 'https://splunkcloud.okta.com';
    chrome.tabs.create({ url: url });
  });
});