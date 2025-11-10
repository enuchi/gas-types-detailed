// Type definitions for Google Apps Script 2025-11-10
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
     *       const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
     *       console.log(`${group.getEmail()}:`);
     *       const users = group.getUsers();
     *       for (let i = 0; i < users.length; i++) {
     *         const user = users[i];
     *         console.log(user.getEmail());
     *       }
     *     }
     */
    interface Group {

      /**
       * Gets this group's email address.
       * This example lists the email address of all the groups the user belongs to.
       *
       *     function listMyGroupEmails() {
       *       const groups = GroupsApp.getGroups();
       *       for (let i = 0; i < groups.length; i++) {
       *         console.log(groups[i].getEmail());
       *       }
       *     }
       *
       * Return:
       * - String — The group's email address.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#getEmail()
       */
      getEmail(): string;

      /**
       * Retrieves the direct child groups of the group. Throws an exception if you do not have permission to view the group's member list.
       * In addition to this method, you can use the Admin SDK Directory advanced service to retrieve group members in a domain.
       *
       *     function listGroupMembers() {
       *       const GROUP_EMAIL = 'example@googlegroups.com';
       *       const group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
       *       const childGroups = group.getGroups();
       *       console.log(`Group ${GROUP_EMAIL} has ${childGroups.length} groups:`);
       *       for (let i = 0; i < childGroups.length; i++) {
       *         const childGroup = childGroups[i];
       *         console.log(childGroup.getEmail());
       *       }
       *     }
       *
       * Return:
       * - Group[] — All the direct child groups of the group.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#getGroups()
       */
      getGroups(): Group[];

      /**
       * Retrieves a user's role in the context of the group. A user who is a direct member of a group has exactly one role within that group. Throws an exception if the user is not a member of the group or if you do not have permission to view the group's member list.
       * This example lists the owners of a group:
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     const users = group.getUsers();
       *     console.log('These are the group owners:');
       *     for (let i = 0; i < users.length; i++) {
       *       const user = users[i];
       *       if (group.getRole(user.getEmail()) === GroupsApp.Role.OWNER) {
       *         console.log(user.getEmail());
       *       }
       *     }
       *
       * Return:
       * - Role — That user's role within the group.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#getRole(String)
       * @param email A user's email address.
       */
      getRole(email: string): Role;

      /**
       * Retrieves a user's role in the context of the group. A user who is a direct member of a group has exactly one role within that group. Throws an exception if the user is not a member of the group or if you do not have permission to view the group's member list.
       * This example lists the owners of a group:
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     const users = group.getUsers();
       *     console.log('These are the group owners:');
       *     for (let i = 0; i < users.length; i++) {
       *       const user = users[i];
       *       if (group.getRole(user) === GroupsApp.Role.OWNER) {
       *         console.log(user.getEmail());
       *       }
       *     }
       *
       * Return:
       * - Role — That user's role within the group.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#getRole(User)
       * @param user The user whose role to retrieve.
       */
      getRole(user: Base.User): Role;

      /**
       * Retrieves users' roles in the context of the group. A user who is a direct member of a group has exactly one role within that group. Throws an exception if any user is not a member of the group or if you do not have permission to view the group's member list.
       * This example lists the owners of a group:
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     const users = group.getUsers();
       *     const roles = group.getRoles(users);
       *     console.log('These are the group owners:');
       *     for (let i = 0; i < users.length; i++) {
       *       if (roles[i] === GroupsApp.Role.OWNER) {
       *         console.log(users[i].getEmail());
       *       }
       *     }
       *
       * Return:
       * - Role[] — The roles of those users within the group.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#getRoles(User)
       * @param users The users whose roles are requested.
       */
      getRoles(users: Base.User[]): Role[];

      /**
       * Gets the direct members and banned members of the group that have a known corresponding Google account. Throws an exception if you don't have permission to view the group's member list or the member emails.
       * Note: if you are a member of a group B which is itself a member of another group A then you are indirectly subscribed to group A. Although you receive copies of messages sent to it, you are not actually subscribed to the parent group A.
       * Here's an example which shows the members of a group. Before running it, replace the email address of the group with that of one on your domain.
       *
       *     function listGroupMembers() {
       *       const GROUP_EMAIL = 'example@googlegroups.com';
       *       const group = GroupsApp.getGroupByEmail(GROUP_EMAIL);
       *       const users = group.getUsers();
       *       console.log(`Group ${GROUP_EMAIL} has ${users.length} members:`);
       *       for (let i = 0; i < users.length; i++) {
       *         const user = users[i];
       *         console.log(user.getEmail());
       *       }
       *     }
       *
       * Return:
       * - User[] — All the direct members of the group.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#getUsers()
       */
      getUsers(): Base.User[];

      /**
       * Tests if a group is a direct member of this group. The method does not return true if the tested group is nested more than one level below this group. Throws an exception if you do not have permission to view the group's member list.
       *
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     const childGroup = GroupsApp.getGroupByEmail('childgroup@googlegroups.com');
       *     if (group.hasGroup(childGroup)) {
       *       console.log('childgroup@googlegroups.com is a child group');
       *     }
       *
       * Return:
       * - Boolean — true if that group is a child group of this group; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#hasGroup(Group)
       * @param group The group whose membership to test.
       */
      hasGroup(group: Group): boolean;

      /**
       * Tests if a group is a direct member of this group. The method does not return true if the tested group is nested more than one level below this group. Throws an exception if you do not have permission to view the group's member list.
       *
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     if (group.hasGroup('childgroup@googlegroups.com')) {
       *       console.log('childgroup@googlegroups.com is a child group');
       *     }
       *
       * Return:
       * - Boolean — true if that group is a child group of this group; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#hasGroup(String)
       * @param email A group's email address.
       */
      hasGroup(email: string): boolean;

      /**
       * Tests if a user is a direct member of the group. Throws an exception if you do not have permission to view the group's member list.
       * Here's an example which checks if the current user is a member of a group:
       *
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     const currentUser = Session.getActiveUser();
       *     if (group.hasUser(currentUser.getEmail())) {
       *       console.log('You are a member');
       *     }
       *
       * Return:
       * - Boolean — true if that user is a member of the group; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/group#hasUser(String)
       * @param email A user's email address.
       */
      hasUser(email: string): boolean;

      /**
       * Tests if a user is a direct member of the group. Throws an exception if you do not have permission to view the group's member list.
       * Here's an example which checks if the current user is a member of a group:
       *
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     const currentUser = Session.getActiveUser();
       *     if (group.hasUser(currentUser)) {
       *       console.log('You are a member');
       *     }
       *
       * Return:
       * - Boolean — true if that user is a member of the group; false otherwise.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
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
     *     const groups = GroupsApp.getGroups();
     *     Logger.log(`You belong to ${groups.length} groups.`);
     */
    interface GroupsApp {
      Role: typeof Role;

      /**
       * Retrieves the group having the specified email address. Throws an exception if the group does not exist or if you do not have permission to see it.
       * Here is an example that gets a group by its email address and outputs whether the current user is a member. Before running, replace the sample email address with a real group's email.
       *
       *     const group = GroupsApp.getGroupByEmail('example@googlegroups.com');
       *     const currentUser = Session.getActiveUser();
       *     if (group.hasUser(currentUser)) {
       *       Logger.log('You are a member of this group.');
       *     } else {
       *       Logger.log('You are not a member of this group.');
       *     }
       *
       * Return:
       * - Group — The group with the specified email address.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/groups-app#getGroupByEmail(String)
       * @param email The email address of the group to retrieve.
       */
      getGroupByEmail(email: string): Group;

      /**
       * Retrieves all the groups of which you are a direct member (or a pending member). This is an empty list if you are not in any groups. Throws an exception if the group does not exist or if you do not have permission to see it.
       * Here's an example of how to print the email address for every group the user belongs to:
       *
       *     function showMyGroups() {
       *       const groups = GroupsApp.getGroups();
       *       let str = `You are in ${groups.length} groups: `;
       *       for (let i = 0; i < groups.length; i++) {
       *         const group = groups[i];
       *         str = `${str + group.getEmail()} `;
       *       }
       *       Logger.log(str);
       *     }
       *
       * You can use Group.getRole(email) to determine if you are an existing or pending member of the returned groups.
       *
       * Return:
       * - Group[] — The list of groups of which the user is a direct member.
       *
       * Authorization:
       *
       * Scripts that use this method require authorization with one or more of the following scopes:
       * - https://www.googleapis.com/auth/groups
       *
       * https://developers.google.com/apps-script/reference/groups/groups-app#getGroups()
       */
      getGroups(): Group[];
    }
    /**
     * Possible roles of a user within a group, such as owner or ordinary member. Users subscribed to a
     * group have exactly one role within the context of that group.
     *
     * To call an enum, you call its parent class, name, and property. For example,
     * GroupsApp.Role.OWNER.
     * See also
     *
     * Group.getRole(email)
     */
    enum Role { OWNER, MANAGER, MEMBER, INVITED, PENDING, BANNED }
  }
}

declare var GroupsApp: GoogleAppsScript.Groups.GroupsApp;
