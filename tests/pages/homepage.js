/**
 * Homepage page object.
 */
module.exports = {
  "url": function() {
    return this.api.launchUrl;
  },
  "sections":{
    "eyebrow":{
      "selector": '#ceiling-wrap',
      "elements":{

      }
    },
    "mainNav":{
      "selector": '#navigation-wrap',
      "elements":{

      }
    },
    "hero":{
      "selector": '#home-hero-river',
      "elements":{

      }
    },
    "hosting":{
      "selector": '#home-hosting-river',
      "elements":{
        "dedicatedCard": {
          "selector": '.monopoly-card a[href="/dedicated-servers"]'
        },
        "publicCloudCard": {
          "selector": '.monopoly-card a[href="/cloud"]'
        },
        "privateCloudCard": {
          "selector": '.monopoly-card a[href="/cloud/private"]'
        },
        "msCard":{
          "selector": '.monopoly-card a[href="/microsoft/managed-azure-cloud"]'
        }


      }
    },
    "solutions":{
      "selector": '#home-solutions-river',
      "elements":{

      }
    },
    "contact":{
      "selector": '.home-river-contact',
      "elements":{

      }
    },
    "rug":{
      "selector": '.rug',
      "elements":{

      }
    },
    "footer":{
      "selector": '#fatfooter-wrap',
      "elements":{

      }
    },
    "basement":{
      "selector": '#basement-wrap',
      "elements":{

      }
    }
  }
}