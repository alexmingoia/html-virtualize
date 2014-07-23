var expect = require('expect.js');
var VirtualNode = require('vtree/vnode');
var parse = require('..');

describe('html-virtualize', function() {
  describe('parse()', function() {
    it('returns virtual dom', function() {
      var vtree = parse('<div id="test"><p class="test">Test</p><h1><span></span></h1></div>');
      expect(vtree).to.be.a(VirtualNode);
      expect(vtree.properties).to.have.property('id', 'test');
      expect(vtree.children).to.have.property('length', 2);
      expect(vtree.children[0]).to.be.a(VirtualNode);
      expect(vtree.children[0]).to.have.property('tagName', 'p');
      expect(vtree.children[0].properties).to.have.property('class', 'test');
    });

    it('sets the correct VirtualNode#count', function() {
      var vtree = parse('<div id="test">Count is <span>3</span></div>');
      expect(vtree).to.have.property('count', 3);
      expect(vtree).to.have.property('children');
      expect(vtree.children).to.have.property('length', 2);
      vtree = parse('<div><p>Test</p>Test<span>Test</span></div>');
      expect(vtree).to.have.property('count', 5);
    });
  });
});
