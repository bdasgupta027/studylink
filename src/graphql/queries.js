/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvite = /* GraphQL */ `
  query GetInvite($id: ID!) {
    getInvite(id: $id) {
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
export const listInvites = /* GraphQL */ `
  query ListInvites(
    $filter: ModelInviteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sender
        receiver
        studygroupid
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getReplies = /* GraphQL */ `
  query GetReplies($id: ID!) {
    getReplies(id: $id) {
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
export const listReplies = /* GraphQL */ `
  query ListReplies(
    $filter: ModelRepliesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReplies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const repliesByAnnouncementID = /* GraphQL */ `
  query RepliesByAnnouncementID(
    $announcementID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRepliesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repliesByAnnouncementID(
      announcementID: $announcementID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
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
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        userId
        email
        studyGroupId
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudyGroupCard = /* GraphQL */ `
  query GetStudyGroupCard($id: ID!) {
    getStudyGroupCard(id: $id) {
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
export const listStudyGroupCards = /* GraphQL */ `
  query ListStudyGroupCards(
    $filter: ModelStudyGroupCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudyGroupCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        groupName
        numMembers
        className
        acceptingMembers
        description
        groupOwner
        image
        memberList
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMemberCard = /* GraphQL */ `
  query GetMemberCard($id: ID!) {
    getMemberCard(id: $id) {
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
export const listMemberCards = /* GraphQL */ `
  query ListMemberCards(
    $filter: ModelMemberCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMemberCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        studyGroupId
        username
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProfileCard = /* GraphQL */ `
  query GetProfileCard($id: ID!) {
    getProfileCard(id: $id) {
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
export const listProfileCards = /* GraphQL */ `
  query ListProfileCards(
    $filter: ModelProfileCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfileCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        announcementID
        username
        comment
        likes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByAnnouncementID = /* GraphQL */ `
  query CommentsByAnnouncementID(
    $announcementID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByAnnouncementID(
      announcementID: $announcementID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        announcementID
        username
        comment
        likes
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAnnouncement = /* GraphQL */ `
  query GetAnnouncement($id: ID!) {
    getAnnouncement(id: $id) {
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
export const listAnnouncements = /* GraphQL */ `
  query ListAnnouncements(
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        username
        announcement
        studygroupcardID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const announcementsByStudygroupcardID = /* GraphQL */ `
  query AnnouncementsByStudygroupcardID(
    $studygroupcardID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAnnouncementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    announcementsByStudygroupcardID(
      studygroupcardID: $studygroupcardID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        username
        announcement
        studygroupcardID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
