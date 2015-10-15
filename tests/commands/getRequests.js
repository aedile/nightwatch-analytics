/**
 * Fetches requests from window.performance for use in testing.
 * @param callback
 * @returns {exports}
 */
exports.command = function(callback) {
  var self = this;
  this.execute(
    function() { // execute application specific code
      return window.performance.getEntries();
    },

    [], // arguments array to be passed

    function(result) {
      if (typeof callback === "function") {
        callback.call(self, result);
      }
    }
  );

  return this;
};