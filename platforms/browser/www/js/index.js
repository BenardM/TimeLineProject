
      document.addEventListener("volumeupbutton", callbackFunction, false);
      document.getElementById("photoButton").addEventListener("click", cameraTakePicture);
      document.getElementById("myBtn").addEventListener("click", myFunction);
      document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage);
      document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage);
      document.getElementById("removeProjectFromLocalStorage").addEventListener
      ("click", removeProjectFromLocalStorage);
      document.getElementById("getLocalStorageByKey").addEventListener
      ("click", getLocalStorageByKey);
      var localStorage = window.localStorage;






    // device APIs are available
    //



    function setLocalStorage() {
      localStorage.setItem("Name", "John");
      localStorage.setItem("Job", "Developer");
      localStorage.setItem("Project", "Cordova Project");
    }

    function showLocalStorage() {

     console.log(localStorage.getItem("Name"));
      console.log(localStorage.getItem("Job"));
      console.log(localStorage.getItem("Project"));
    }

    function removeProjectFromLocalStorage() {
      for (i = 0; i < localStorage.length(); i++) {
        localStorage.removeItem(key);}
    }

    function getLocalStorageByKey() {
      localStorage.getItem("Name");
      localStorage.getItem("Job");
      localStorage.getItem("Project");
    }

    

    function onBatteryStatus(info) {function onLoad() {
      document.addEventListener("deviceready", onDeviceReady, false);}
    alert("BATTERY STATUS: Level: " + info.level + " isPlugged: " + info.isPlugged);
    }


    function callbackFunction(e) {
      e.preventDefault();
    alert('Volume Up Button is pressed!')
    }

    function cameraTakePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL
    });
  }
