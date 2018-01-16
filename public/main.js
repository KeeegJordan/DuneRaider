'use strict';

// Initializes the Demo.
function Demo() {
  document.addEventListener('DOMContentLoaded', function() {
    this.nameContainer = document.getElementById('name-container');
    this.uidContainer = document.getElementById('uid-container');
    this.picContainer = document.getElementById('profile-pic');


    firebase.auth().onAuthStateChanged(this.onAuthStateChanged.bind(this));
  }.bind(this));
}

// Triggered on Firebase auth state change.
Demo.prototype.onAuthStateChanged = function(user) {
  if (user) {
    this.nameContainer.innerText = user.displayName;
    this.uidContainer.innerText = user.uid;
    this.picContainer.src = user.photoURL;
  }
};

// Load the demo.
new Demo();
