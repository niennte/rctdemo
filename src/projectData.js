const projectData = [
  {
    "id": 2,
    "title": "Usability analysis",
    "body": "Analysis of the application usability to enhance user experience.",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/analysis-usability-2.png",
    "imageTitle": "Screenshot of the view with filter open",
    "imageAlt": "Screenshot of the view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/analysis-usability-2.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "images": [
      {
        "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/analysis-usability-2.png",
        "title": "Screenshot of the view with filter open",
        "alt": "Screenshot of the view with filter open"
      },
      {
        "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/placeholder-2.jpg",
        "title": "Screenshot of the view with filter open",
        "alt": "Screenshot of the view with filter open"
      },
      {
        "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/placeholder.jpg",
        "title": "Screenshot of the view with filter open",
        "alt": "Screenshot of the view with filter open"
      },

    ],
    "kind": ['Relational design', 'Application architecture'],
    "tech": ['Analysis'],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  },
  {
    "id": 3,
    "title": "Relational design and framework development",
    "body": "Database design to model user experience enhancements. In the demo, please use login name 'guest' and password 'password'.",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/fullstack-entities-5.png",
    "imageTitle": "Screenshot of the view with filter open",
    "imageAlt": "Screenshot of the view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/fullstack-entities-5.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "kind": ['Relational design', 'Application design', 'Application development'],
    "tech": ['LAMP stack', 'YII2' , 'MVC'],
    "github": [
      {
          "label": "Base models",
          "URL": "https://github.com/niennte/isk2/commit/6e2ee0d3060130659068bb414838e900dd4867cb"
      },
      {
          "label": "Common models with relationships and business rules",
          "URL": "https://github.com/niennte/isk2/tree/master/common/models"
      },
      {
          "label": "Controllers",
          "URL": "https://github.com/niennte/isk2/tree/master/backend/controllers"
      },
      {
          "label": "Views",
          "URL": "https://github.com/niennte/isk2/tree/master/backend/views"
      }
    ],
    "demos": [
      {
        "label": "Entity manager",
        "URL": "http://ec2-52-87-238-76.compute-1.amazonaws.com:8080/product/view?id=159"
      }
    ],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  },
  {
    "id": 4,
    "title": "User experience modelling - I",
    "body": "Feature development. Search products and display selection based on user criteria",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/fullstack-showcase-3.png",
    "imageTitle": "Screenshot of the view with filter open",
    "imageAlt": "Screenshot of the view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/fullstack-showcase-3.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "video": {
      //"url": "/video/showcase-1.mp4"
      "url": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/video/showcase-1.mp4"
    },
    "kind": ['User Experience design', 'Application development'],
    "tech": ['LAMP Stack', 'YII2' , 'Bootstrap3', 'JQuery', 'AJAX'],
    "github": [
      {
        "label": "Wrapper service (model)",
        "URL": "https://github.com/niennte/isk2/blob/master/common/models/filter/Filters.php"
      },
      {
        "label": "Wrapper controller",
        "URL": "https://github.com/niennte/isk2/blob/master/frontend/controllers/SiteController.php"
      }
    ],
    "demos": [
      {
        "label": "Open in browser",
        "URL": "http://ec2-52-87-238-76.compute-1.amazonaws.com"
      },
      {
        "label": "Open in simulator",
        "URL": "http://www.appsimulator.net/webapp/?frame=apple_ipad_air_h&link=http%3A%2F%2Fec2-52-87-238-76.compute-1.amazonaws.com"
      }
    ],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  },
  {
    "id": 5,
    "title": "User experience modelling - II",
    "body": "Self populating mobile app based on core user experience.",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/mobile-simulator-product-1.png",
    "imageTitle": "Screenshot of the mobile view with filter open",
    "imageAlt": "Screenshot of the mobile view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/mobile-simulator-product-1.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "video": {
      "url": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/video/mobile-app.mp4"
    },
    "kind": ['User Experience', 'UI Design', 'Application development'],
    "tech": ['LAMP Stack', 'YII2' , 'JQueryMobile', 'AJAX'],
    "github": [
      {
        "label": "Wrapper service",
        "URL": "https://github.com/niennte/isk2/blob/master/common/models/filter/Filters.php"
      },
      {
        "label": "Wrapper controller",
        "URL": "https://github.com/niennte/isk2/blob/master/frontend/controllers/MobileController.php"
      },
        {
            "label": "Dynamic frontend",
            "URL": "https://github.com/niennte/isk2/blob/master/frontend/web/js/mobile/js/commonLight.js"
        }
    ],
    "demos": [
      {
        "label": "Mobile App Demo",
        "URL": "http://ec2-52-87-238-76.compute-1.amazonaws.com/mobile"
      },
      {
        "label": "Open in simulator",
        "URL": "http://www.appsimulator.net/webapp/?frame=apple_iphone_6_v&link=http%3A%2F%2Fec2-52-87-238-76.compute-1.amazonaws.com%2Fmobile"
      }
    ],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  },
  {
    "id": 6,
    "title": "Modular frontend design - I",
    "body": "Analysing technical requirements, design and interactions for a landing page to present newly released product.",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/frontend-presentation-2.png",
    "imageTitle": "Screenshot of the view with filter open",
    "imageAlt": "Screenshot of the view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/frontend-presentation-2.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "kind": ['Relational design', 'Application architecture'],
    "tech": ['Analysis'],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  },
  {
    "id": 8,
    "title": "Modular frontend design - II",
    "body": "Product release presentation based on analysis shown in previous project.",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/frontend-presentation-3.png",
    "imageTitle": "Screenshot of the view with filter open",
    "imageAlt": "Screenshot of the view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/frontend-presentation-3.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "video": {
      "url": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/video/product_pres.mp4"
    },
    "kind": ['Relational design', 'Application architecture'],
    "tech": ['YII 2','mySQL', 'jQuery', 'CSS', 'Bootstrap', 'AJAX'],
    "github": [
      {
        "label": "Controller",
        "URL": "https://github.com/niennte/isk2/blob/master/frontend/controllers/ProductController.php"
      }
    ],
    "demos": [
      {
        "label": "Product Presentation",
        "URL": "http://ec2-52-87-238-76.compute-1.amazonaws.com/product/iphone5s-claro"
      }
    ],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  },
  {
    "id": 11,
    "title": "Integrating a web app with an app distribution platform (oAuth2, SSO)",
    "body": "Connector to enable application to communicate with digatal marketplace, managing user accounts and subscriptions. The user gets logged in via SSO, and the application gets authorized using OAuth2 mechanisms.",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/backend-SSO-OAuth2.png",
    "imageTitle": "Screenshot of the view with filter open",
    "imageAlt": "Screenshot of the view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/backend-SSO-OAuth2.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "kind": ['Relational design', 'Application architecture'],
    "tech": ['Spring Boot', 'Tomcat', 'Hibernate', 'OAuth2', 'SSO'],
    "github": [
      {
        "label": "Sample API connector using AppDirect API",
        "URL": "https://github.com/niennte/appdirect"
      }
    ],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  },
  {
    "id": 12,
    "title": "Entity - control- boundary app, experimental",
    "body": "An experiment to organize an application so as to address known MVC issues (business rules not mapping to relation model result in tight coupling between the model, the controller, and the view.",
    "image": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/backend-entity-control-boundary.png",
    "imageTitle": "Screenshot of the view with filter open",
    "imageAlt": "Screenshot of the view with filter open",
    "posterImage": {
      "src": "https://s3.amazonaws.com/quod.erat.demonstrandum/portfolio/img/backend-entity-control-boundary.png",
      "title": "Screenshot of the view with filter open",
      "alt": "Screenshot of the view with filter open"
    },
    "kind": ['Relational design', 'Application architecture'],
    "tech": ['Apache' , 'PostgreSQL', 'Zend3', 'PHP', 'Doctrine', 'Entity-control-boundary', 'Sandwich testing'],
    "github": [
      {
        "label": "Payroll application",
        "URL": "https://github.com/niennte/prapp"
      }
    ],
    "relatedProjects": [
      {
        "id": 2,
        "label": "Usability analysis"
      }
    ]
  }
];

export default projectData;
