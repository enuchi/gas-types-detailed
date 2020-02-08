// Type definitions for Google Apps Script 2020-01-26
// Project: https://developers.google.com/apps-script/
// Definitions by: motemen <https://github.com/motemen/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="google-apps-script.types.d.ts" />
/// <reference path="google-apps-script.base.d.ts" />

declare namespace GoogleAppsScript {
  namespace Groups {
    /**
     * A group object whose members and those members' roles within the group can be queried.
     *
     * Here's an example which shows the members of a group. Before running it, replace the email
     * address of the group with that of one on your domain.
     *
     *     function listGroupMembers() {
     *       var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
     *       var str = group.getEmail() + ': ';
     *       var users = group.getUsers();
     *       for (var i = 0; i < users.length; i++) {
     *         var user = users[i];
     *         str = str + user.getEmail() + ", ";
     *       }
     *       Logger.log(str);
     *     }
     */
    interface Group {

      /**
       * Gets this group's email address.
       *
       *
       * This example lists the email address of all the groups the user belongs to.
       *
       *
       *     function listMyGroupEmails() {
       *       var groups = GroupsApp.getGroups();
       *       for (var i = 0; i < groups.length; i++) {
       *         Logger.log(groups[i].getEmail());
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#getEmail()
       */
      getEmail(): string;

      /**
       * Retrieves the direct child groups of the group. Throws an exception if you do not have
       * permission to view the group's member list.
       *
       *
       * In addition to this method, you can use the Admin SDK Directory advanced service to
       * retrieve group members in a domain.
       *
       *
       *     function listGroupMembers() {
       *       var GROUP_EMAIL = "example@googlegroups.com";
       *       var group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
       *       var childGroups = group.getGroups();
       *       var str = "Group " + GROUP_EMAIL + " has " + childGroup.length +
       *           " groups: ";
       *       for (var i = 0; i < childGroups.length; i++) {
       *         var childGroup = childGroups[i];
       *         str = str + childGroup.getEmail() + ", ";
       *       }
       *       Logger.log(str);
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#getGroups()
       */
      getGroups(): Group[];

      /**
       * Retrieves a user's role in the context of the group. A user who is a direct member of a group
       * has exactly one role within that group. Throws an exception if the user is not a member of the
       * group or if you do not have permission to view the group's member list.
       *
       *
       * This example lists the owners of a group:
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     var users = group.getUsers();
       *     Logger.log('These are the group owners:');
       *     for (var i = 0; i < users.length; i++) {
       *       var user = users[i];
       *       if (group.getRole(user.getEmail()) == GroupsApp.Role.OWNER) {
       *         Logger.log(user.getEmail());
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#getRole(String)
       * @param email A user's email address.
       */
      getRole(email: string): Role;

      /**
       * Retrieves a user's role in the context of the group. A user who is a direct member of a group
       * has exactly one role within that group. Throws an exception if the user is not a member of the
       * group or if you do not have permission to view the group's member list.
       *
       *
       * This example lists the owners of a group:
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     var users = group.getUsers();
       *     Logger.log('These are the group owners:');
       *     for (var i = 0; i < users.length; i++) {
       *       var user = users[i];
       *       if (group.getRole(user) == GroupsApp.Role.OWNER) {
       *         Logger.log(user.getEmail());
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#getRole(User)
       * @param user The user whose role to retrieve.
       */
      getRole(user: Base.User): Role;

      /**
       * Retrieves users' roles in the context of the group. A user who is a direct member of a group
       * has exactly one role within that group. Throws an exception if any user is not a member of the
       * group or if you do not have permission to view the group's member list.
       *
       *
       * This example lists the owners of a group:
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     var users = group.getUsers();
       *     var roles = group.getRoles(users);
       *     Logger.log('These are the group owners:');
       *     for (var i = 0; i < users.length; i++) {
       *       if (roles[i] == GroupsApp.Role.OWNER) {
       *         Logger.log(users[i].getEmail());
       *       }
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#getRoles(User)
       * @param users The users whose roles are requested.
       */
      getRoles(users: Base.User[]): Role[];

      /**
       * Retrieves the direct members of the group that have a known corresponding Google account.
       * Throws an exception if you do not have permission to view the group's member list.
       *
       *
       * Note: if you are a member of a group B which is itself a member of another group A then you
       * are indirectly subscribed to group A. Although you receive copies of messages sent to
       * it, you are not actually subscribed to the parent group A.
       *
       *
       * Here's an example which shows the members of a group. Before running it, replace the email
       * address of the group with that of one on your domain.
       *
       *
       *     function listGroupMembers() {
       *       var GROUP_EMAIL = "example@googlegroups.com";
       *       var group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
       *       var users = group.getUsers();
       *       var str = "Group " + GROUP_EMAIL + " has " + users.length +
       *       " members: ";
       *       for (var i = 0; i < users.length; i++) {
       *         var user = users[i];
       *         str = str + user.getEmail() + ", ";
       *       }
       *       Logger.log(str);
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#getUsers()
       */
      getUsers(): Base.User[];

      /**
       * Tests if a group is a direct member of this group. The method does not return true if
       * the tested group is nested more than one level below this group. Throws an exception if you do
       * not have permission to view the group's member list.
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     var childGroup = GroupsApp.getGroupByEmail("childgroup@googlegroups.com");
       *     if (group.hasGroup(childGroup)) {
       *       Logger.log("childgroup@googlegroups.com is a child group");
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#hasGroup(Group)
       * @param group The group whose membership to test.
       */
      hasGroup(group: Group): boolean;

      /**
       * Tests if a group is a direct member of this group. The method does not return true if
       * the tested group is nested more than one level below this group. Throws an exception if you do
       * not have permission to view the group's member list.
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     if (group.hasGroup("childgroup@googlegroups.com")) {
       *       Logger.log("childgroup@googlegroups.com is a child group");
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#hasGroup(String)
       * @param email A group's email address.
       */
      hasGroup(email: string): boolean;

      /**
       * Tests if a user is a direct member of the group. Throws an exception if you do not have
       * permission to view the group's member list.
       *
       *
       * Here's an example which checks if the current user is a member of a group:
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     var currentUser = Session.getActiveUser();
       *     if (group.hasUser(currentUser.getEmail())) {
       *       Logger.log("You are a member");
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#hasUser(String)
       * @param email A user's email address.
       */
      hasUser(email: string): boolean;

      /**
       * Tests if a user is a direct member of the group. Throws an exception if you do not have
       * permission to view the group's member list.
       *
       *
       * Here's an example which checks if the current user is a member of a group:
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     var currentUser = Session.getActiveUser();
       *     if (group.hasUser(currentUser)) {
       *       Logger.log("You are a member");
       *     }
       * https://developers.google.com/apps-script/reference/groups/group#hasUser(User)
       * @param user The user whose membership to test.
       */
      hasUser(user: Base.User): boolean;
    }
    /**
     * This class provides access to Google Groups information. It can be used to query information such
     * as a group's email address, or the list of groups in which the user is a direct member.
     *
     * Here's an example that shows how many groups the current user is a member of:
     *
     *     var groups = GroupsApp.getGroups();
     *     Logger.log('You belong to ' + groups.length + ' groups.');
     */
    interface GroupsApp {
      Role: typeof Role;

      /**
       * Retrieves the group having the specified email address. Throws an exception if the group does
       * not exist or if you do not have permission to see it.
       *
       *
       * Here is an example that gets a group by its email address and outputs whether the current
       * user is a member. Before running, replace the sample email address with a real group's email.
       *
       *
       *     var group = GroupsApp.getGroupByEmail("example@googlegroups.com");
       *     var currentUser = Session.getActiveUser();
       *     if (group.hasUser(currentUser)) {
       *       Logger.log("You are a member of this group.");
       *     }
       *     else {
       *       Logger.log("You are not a member of this group.");
       *     }
       * https://developers.google.com/apps-script/reference/groups/groups-app#getGroupByEmail(String)
       * @param email The email address of the group to retrieve.
       */
      getGroupByEmail(email: string): Group;

      /**
       * Retrieves all the groups of which you are a direct member (or a pending member). This is an
       * empty list if you are not in any groups. Throws an exception if the group does not exist or if
       * you do not have permission to see it.
       *
       *
       * Here's an example of how to print the email address for every group the user belongs to:
       *
       *
       *     function showMyGroups() {
       *       var groups = GroupsApp.getGroups();
       *       var str = 'You are in ' + groups.length + ' groups: ';
       *       for (var i = 0; i < groups.length; i++) {
       *         var group = groups[i];
       *         str = str + group.getEmail() + ' ';
       *       }
       *       Logger.log(str);
       *     }
       * https://developers.google.com/apps-script/reference/groups/groups-app#getGroups()
       */
      getGroups(): Group[];
    }
    /**
     * Possible roles of a user within a group, such as owner or ordinary member. Users subscribed to a
     * group have exactly one role within the context of that group.
     * See also
     *
     * Group.getRole(email)
     */
    enum Role { OWNER, MANAGER, MEMBER, INVITED, PENDING }
  }
}

declare var GroupsApp: GoogleAppsScript.Groups.GroupsApp;
