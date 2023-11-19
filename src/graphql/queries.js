/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      username
      studyGroupId
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
        username
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
      date
      announcement
      Comments {
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
        date
        announcement
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
