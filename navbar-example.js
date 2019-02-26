/*
 *
 * This example creates a new instance of the Unison UI Navbar with
 * static data. For full information on developing with the Navbar
 * please see https://confluence.ops1.clb.wdc.west.com/display/UNISON/Unison+Developers
 * An API reference is available at https://dlmcbtg7rg5g2.cloudfront.net/
 *
 * Note: this example is provided in vanilla JS for easy consumption, but TypeScript
 * typings are available and recommended. Please check the unison-ui source code and
 * documentation for examples of using the navbar with TypeScript
 */

// Create a IUnisonNavConfig object. Use the IUnisonNavConfig documentation for the correct
// format for this object
var navConfig = {
  navElements: [
    {
      id: "dashboard",
      title: "Dashboard",
      route: "https://west.com",
      openInNewTab: true
    },
    {
      id: "dd1",
      title: "Dropdown 1",
      subNavElements: [
        {
          id: "subnav1",
          title: "External Link",
          route: "https://west.com",
          openInNewTab: true,
          subNavElements: [
            {
              id: "subsubnav1",
              title: "Second Level 1",
              subNavElements: [
                {
                  id: "subsubsubnav",
                  title: "Third Level 1"
                }
              ]
            }
          ]
        },
        {
          id: "subnav2",
          title: "Internal Link",
          route: "https://west.com",
          openInNewTab: false,
          hasDivider: true
        },
        {
          id: "subnav3",
          title: "Subitem 3"
        }
      ]
    },
    {
      id: "dd2",
      title: "Dropdown 2",
      subNavElements: [
        { id: "subnav4", title: "Subitem 4" },
        { id: "subnav5", title: "Subitem 5" },
        { id: "subnav6", title: "Subitem 6" }
      ]
    },
    { id: "administration", title: "Administration" }
  ],
  selectedNavElementId: "dashboard",
  navigationChangeHandler: function(navElementId) {
    console.log("navigationChangeHandler " + navElementId);
  },
  accountNavElement: {
    id: "default-user",
    title: "Default User With a Long Label",
    subNavElements: [
      {
        id: "user-1",
        title: "User 1",
        route: "https://west.com",
        openInNewTab: true
      },
      {
        id: "user-2",
        title: "User 2",
        hasDivider: true
      },
      {
        id: "user-3",
        title: "User 3"
      }
    ]
  },
  accountChangeHandler: function(navElementId) {
    console.log("accountChangeHandler " + navElementId);
  },
  userProfileNavElements: [
    {
      id: "user-profile",
      title: "User Profile",
      icon: "User",
      subNavElements: [
        {
          id: "settings",
          title: "Settings",
          route: "https://west.com"
        },
        {
          id: "update-profile",
          title: "Update Profile",
          hasDivider: true
        },
        {
          id: "change-pass",
          title: "Change Password"
        }
      ]
    }
  ],
  userProfileChangeHandler: function(navElementId) {
    console.log("userProfileChangeHandler " + navElementId);
  },
  iconNavElements: [
    {
      id: "calendar",
      title: "Calendar",
      icon: "Calendar",
      subNavElements: [
        {
          id: "calendar-1",
          title: "Calendar Subitem 1",
          route: "https://west.com"
        },
        {
          id: "calendar-2",
          title: "Calendar Subitem 2"
        }
      ]
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: "Notifications"
    }
  ],
  iconNavChangeHandler: function(navElementId) {
    console.log("iconNavChangeHandler " + navElementId);
  },
  user: {
    firstName: "Ben",
    lastName: "Chodor",
    id: "bc1234"
  }
};
console.log("hello Unison App Developer!");
var nav = new window.UnisonNavigation(
  "1AAD061E-6D3F-4BDA-82FB-EF8E94B312A2",
  navConfig,
  document.getElementById("navbar")
);
