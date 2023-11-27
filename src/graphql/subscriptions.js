/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInvite = /* GraphQL */ `
  subscription OnCreateInvite($filter: ModelSubscriptionInviteFilterInput) {
    onCreateInvite(filter: $filter) {
      id
      sender
      receiver
      studygroupid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInvite = /* GraphQL */ `
  subscription OnUpdateInvite($filter: ModelSubscriptionInviteFilterInput) {
    onUpdateInvite(filter: $filter) {
      id
      sender
      receiver
      studygroupid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInvite = /* GraphQL */ `
  subscription OnDeleteInvite($filter: ModelSubscriptionInviteFilterInput) {
    onDeleteInvite(filter: $filter) {
      id
      sender
      receiver
      studygroupid
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateReplies = /* GraphQL */ `
  subscription OnCreateReplies($filter: ModelSubscriptionRepliesFilterInput) {
    onCreateReplies(filter: $filter) {
      id
      Reply
      Likes
      Username
      Postedat
      announcementID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateReplies = /* GraphQL */ `
  subscription OnUpdateReplies($filter: ModelSubscriptionRepliesFilterInput) {
    onUpdateReplies(filter: $filter) {
      id
      Reply
      Likes
      Username
      Postedat
      announcementID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteReplies = /* GraphQL */ `
  subscription OnDeleteReplies($filter: ModelSubscriptionRepliesFilterInput) {
    onDeleteReplies(filter: $filter) {
      id
      Reply
      Likes
      Username
      Postedat
      announcementID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
    onCreateChat(filter: $filter) {
      id
      text
      userId
      email
      studyGroupId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
    onUpdateChat(filter: $filter) {
      id
      text
      userId
      email
      studyGroupId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
    onDeleteChat(filter: $filter) {
      id
      text
      userId
      email
      studyGroupId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStudyGroupCard = /* GraphQL */ `
  subscription OnCreateStudyGroupCard(
    $filter: ModelSubscriptionStudyGroupCardFilterInput
  ) {
    onCreateStudyGroupCard(filter: $filter) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      Announcements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateStudyGroupCard = /* GraphQL */ `
  subscription OnUpdateStudyGroupCard(
    $filter: ModelSubscriptionStudyGroupCardFilterInput
  ) {
    onUpdateStudyGroupCard(filter: $filter) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      Announcements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteStudyGroupCard = /* GraphQL */ `
  subscription OnDeleteStudyGroupCard(
    $filter: ModelSubscriptionStudyGroupCardFilterInput
  ) {
    onDeleteStudyGroupCard(filter: $filter) {
      id
      groupName
      numMembers
      className
      acceptingMembers
      description
      groupOwner
      image
      memberList
      Announcements {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMemberCard = /* GraphQL */ `
  subscription OnCreateMemberCard(
    $filter: ModelSubscriptionMemberCardFilterInput
  ) {
    onCreateMemberCard(filter: $filter) {
      id
      userId
      studyGroupId
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMemberCard = /* GraphQL */ `
  subscription OnUpdateMemberCard(
    $filter: ModelSubscriptionMemberCardFilterInput
  ) {
    onUpdateMemberCard(filter: $filter) {
      id
      userId
      studyGroupId
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMemberCard = /* GraphQL */ `
  subscription OnDeleteMemberCard(
    $filter: ModelSubscriptionMemberCardFilterInput
  ) {
    onDeleteMemberCard(filter: $filter) {
      id
      userId
      studyGroupId
      username
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateProfileCard = /* GraphQL */ `
  subscription OnCreateProfileCard(
    $filter: ModelSubscriptionProfileCardFilterInput
  ) {
    onCreateProfileCard(filter: $filter) {
      id
      firstName
      lastName
      email
      major
      image
      classesEnrolled
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateProfileCard = /* GraphQL */ `
  subscription OnUpdateProfileCard(
    $filter: ModelSubscriptionProfileCardFilterInput
  ) {
    onUpdateProfileCard(filter: $filter) {
      id
      firstName
      lastName
      email
      major
      image
      classesEnrolled
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteProfileCard = /* GraphQL */ `
  subscription OnDeleteProfileCard(
    $filter: ModelSubscriptionProfileCardFilterInput
  ) {
    onDeleteProfileCard(filter: $filter) {
      id
      firstName
      lastName
      email
      major
      image
      classesEnrolled
      userId
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
      id
      announcementID
      username
      comment
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
      id
      announcementID
      username
      comment
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
      id
      announcementID
      username
      comment
      likes
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateAnnouncement = /* GraphQL */ `
  subscription OnCreateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onCreateAnnouncement(filter: $filter) {
      id
      title
      username
      announcement
      Comments {
        nextToken
        __typename
      }
      studygroupcardID
      Replies {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onUpdateAnnouncement(filter: $filter) {
      id
      title
      username
      announcement
      Comments {
        nextToken
        __typename
      }
      studygroupcardID
      Replies {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onDeleteAnnouncement(filter: $filter) {
      id
      title
      username
      announcement
      Comments {
        nextToken
        __typename
      }
      studygroupcardID
      Replies {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
