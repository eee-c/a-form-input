Polymer('a-form-input', {
  publish: {
    name: {value: 0, reflect: true},
    value: {value: 0, reflect: true}
},
    attached: function(){
      this.lightInput = document.createElement('input');
      this.lightInput.type = 'hidden';
      this.lightInput.name = this.getAttribute('name');

      this.parentElement.appendChild(this.lightInput);
    },

    nameChanged: function(){
      this.lightInput.name = this.name;
    },

    valueChanged: function(){
      this.lightInput.value = this.value;
    }

});
