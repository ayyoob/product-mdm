function onRequest(context) {
    var userModule = require("/modules/user.js").userModule;
    var permissions = userModule.getUIPermissions();
    context.permissions = permissions;
    var links = {
        "users": [],
        "policies": [],
        "profiles": [],
        "device-mgt": [],
        "store" : []
    };
    var dashboardLink = {
        title: "Go back to Dashboard",
        icon: "fw-left-arrow",
        url: "/mdm"
    };

    var storeLink = {
        title: "Go back to Store",
        icon: "fw-left-arrow",
        url: "/mdm"
    };

    if (permissions.DASHBOARD_VIEW){
        links.users.push(dashboardLink);
        links.policies.push(dashboardLink);
        links.profiles.push(dashboardLink);
        links.store.push(dashboardLink);
        links.store.push(storeLink);
        links['device-mgt'].push(dashboardLink);
    }
    if (permissions.ADD_USER) {
        links.users.push({
            title: "Add User",
            icon: "fw-add-user",
            url: "/mdm/users/add-user"
        });
    }
    if (permissions.ADD_POLICY) {
        links.policies.push({
            title: "Add Policy",
            icon: "fw-policy",
            url: "/mdm/policies/add-policy"
        });
    }
    if (permissions.ADD_USER) {
        links.profiles.push({
            title: "Add Profile",
            icon: "fw-settings",
            url: "/mdm/profiles/add-profile"
        });
    }
    context.currentActions = links[context.link];
    return context;
}