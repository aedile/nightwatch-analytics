/**
 * Tests evar40 values are properly sent to sitecat.
 */
module.exports = {
  'beforeEach' : function(client){
    client.page.homepage().navigate();
  },
  'after': function(client){
    client.end();
  },
  'click Hosting River:Dedicated Card' : function(client){
    client
      //Navigation
      .page.homepage()
      .section.hosting
      //Actions
      .click('@dedicatedCard')
      //Assertions
      .assert.urlEquals(client.launchUrl + '/dedicated-servers')
      .assert.hasRequest('2o7.net',{'c40': 'www:Homepage:MonopolyCards:dedicated-servers'});

  }
}

