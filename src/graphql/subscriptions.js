/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMemberCard = /* GraphQL */ `
  subscription OnCreateMemberCard(
    $filter: ModelSubscriptionMemberCardFilterInput
  ) {
    onCreateMemberCard(filter: $filter) {
      id
      username
      StudyGroupCards {
        nextToken
        __typename
      }
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
      username
      StudyGroupCards {
        nextToken
        __typename
      }
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
      username
      StudyGroupCards {
        nextToken
        __typename
      }
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
      studygroupcardID
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
export const onUpdateAnnouncement = /* GraphQL */ `
  subscription OnUpdateAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onUpdateAnnouncement(filter: $filter) {
      id
      title
      studygroupcardID
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
export const onDeleteAnnouncement = /* GraphQL */ `
  subscription OnDeleteAnnouncement(
    $filter: ModelSubscriptionAnnouncementFilterInput
  ) {
    onDeleteAnnouncement(filter: $filter) {
      id
      title
      studygroupcardID
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
export const onCreateStudyGroupCard = /* GraphQL */ `
  subscription OnCreateStudyGroupCard(
    $filter: ModelSubscriptionStudyGroupCardFilterInput
  ) {
    onCreateStudyGroupCard(filter: $filter) {
      id
      groupName
      numMembers
      className
      description
      acceptingMembers
      groupOwner
      image
      Announcements {
        nextToken
        __typename
      }
      memberList
      membercards {
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
      description
      acceptingMembers
      groupOwner
      image
      Announcements {
        nextToken
        __typename
      }
      memberList
      membercards {
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
      description
      acceptingMembers
      groupOwner
      image
      Announcements {
        nextToken
        __typename
      }
      memberList
      membercards {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateMemberCardStudyGroupCard = /* GraphQL */ `
  subscription OnCreateMemberCardStudyGroupCard(
    $filter: ModelSubscriptionMemberCardStudyGroupCardFilterInput
  ) {
    onCreateMemberCardStudyGroupCard(filter: $filter) {
      id
      memberCardId
      studyGroupCardId
      memberCard {
        id
        username
        createdAt
        updatedAt
        __typename
      }
      studyGroupCard {
        id
        groupName
        numMembers
        className
        description
        acceptingMembers
        groupOwner
        image
        memberList
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateMemberCardStudyGroupCard = /* GraphQL */ `
  subscription OnUpdateMemberCardStudyGroupCard(
    $filter: ModelSubscriptionMemberCardStudyGroupCardFilterInput
  ) {
    onUpdateMemberCardStudyGroupCard(filter: $filter) {
      id
      memberCardId
      studyGroupCardId
      memberCard {
        id
        username
        createdAt
        updatedAt
        __typename
      }
      studyGroupCard {
        id
        groupName
        numMembers
        className
        description
        acceptingMembers
        groupOwner
        image
        memberList
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteMemberCardStudyGroupCard = /* GraphQL */ `
  subscription OnDeleteMemberCardStudyGroupCard(
    $filter: ModelSubscriptionMemberCardStudyGroupCardFilterInput
  ) {
    onDeleteMemberCardStudyGroupCard(filter: $filter) {
      id
      memberCardId
      studyGroupCardId
      memberCard {
        id
        username
        createdAt
        updatedAt
        __typename
      }
      studyGroupCard {
        id
        groupName
        numMembers
        className
        description
        acceptingMembers
        groupOwner
        image
        memberList
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
