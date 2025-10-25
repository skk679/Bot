module.exports.config = {
  'name': 'wp',
  'version': "1.1.1",
  'hasPermssion': 0x0,
  'credits': "Islamick Cyber Chat",
  'description': "create wp link",
  'commandCategory': 'wo',
  'usages': "[whats up number]",
  'cooldowns': 0x5
};
module.exports.run = async ({
  api: _0x3f337e,
  event: _0x28c24b,
  args: _0x5e6c52
}) => {
  var _0x1f403c = _0x5e6c52.join(" ");
  if (!_0x1f403c) {
    _0x3f337e.sendMessage("Please enter a wp number", _0x28c24b.threadID, _0x28c24b.messageID);
  } else {
    _0x3f337e.sendMessage("wa.me/+91" + _0x1f403c, _0x28c24b.threadID, _0x28c24b.messageID);
  }
};
