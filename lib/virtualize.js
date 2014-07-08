var htmlparser = require('htmlparser2');
var VirtualNode = require('vtree/vnode');
var VirtualText = require('vtree/vtext');

module.exports = parse;

/**
 * Returns virtual DOM tree from given `html`.
 *
 * @param {String} html
 * @return {VirtualNode}
 * @api public
 */

function parse(html) {
  var vtree;
  var vnode;
  var parent_vnode;
  var open = [];

  var parser = new htmlparser.Parser({
    onopentag: function(name, attribs) {
      vnode = new VirtualNode(name, attribs, []);
      open.push(vnode);
      if (!vtree) vtree = vnode;
      if (parent_vnode) {
        var parent = parent_vnode;
        vnode.parent = parent_vnode;
        parent_vnode.children.push(vnode);
        parent.count++;
        while (parent = parent.parent) {
          parent.count++;
        }
      }
      parent_vnode = vnode;
    },
    ontext: function(text) {
      if (vnode) {
        vnode.children.push(new VirtualText(text));
      }
    },
    onclosetag: function(name) {
      open.pop();
      parent_vnode = open[open.length-1];
    }
  });

  parser.write(html);
  parser.end();

  return vtree;
};
