describe('<a-form-input> element', function(){
  var container, el;

  beforeEach(function(done){
    container = document.createElement("div");
    container.innerHTML = '<x-double></x-double>';
    document.body.appendChild(container);
    el = document.querySelector('x-double');

    setTimeout(done, 0); // One event loop for elements to register in Polymer
  });

  afterEach(function(){
    document.body.removeChild(container);
  });

  describe('form input element', function(){
    it('is created in the parent light DOM', function(){
      var input = container.querySelector('input');
      expect(input).not.toBe(null);
    });
    it('updates name when "name" is updated', function(done) {
      var input = container.querySelector('input');

      el.name = 'my_input_name';
      el.async(function(){
        expect(input.name).toEqual('my_input_name');
        done();
      });
    });
    it('updates value when internal state changes', function(done) {
      var input = container.querySelector('input');

      el.in = '5';
      el.async(function(){
        expect(input.value).toEqual('10');
        done();
      });
    });
  });

  describe('properties', function(){
    it('updates name when name is set', function(done) {
      el.name = 'my_input_name';
      el.async(function(){
        expect(el.name).toEqual('my_input_name');
        done();
      });
    });
    it('updates value when internal state changes', function(done) {
      el.in = '5';
      el.async(function(){
        expect(el.value).toEqual(10);
        done();
      });
    });
  });
});
