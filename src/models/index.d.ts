import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerInvite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender?: string | null;
  readonly receiver?: string | null;
  readonly studygroupid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInvite = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Invite, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sender?: string | null;
  readonly receiver?: string | null;
  readonly studygroupid?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Invite = LazyLoading extends LazyLoadingDisabled ? EagerInvite : LazyInvite

export declare const Invite: (new (init: ModelInit<Invite>) => Invite) & {
  copyOf(source: Invite, mutator: (draft: MutableModel<Invite>) => MutableModel<Invite> | void): Invite;
}

type EagerReplies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Replies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Reply?: string | null;
  readonly Likes?: number | null;
  readonly Username?: string | null;
  readonly Postedat?: string | null;
  readonly announcementID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyReplies = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Replies, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Reply?: string | null;
  readonly Likes?: number | null;
  readonly Username?: string | null;
  readonly Postedat?: string | null;
  readonly announcementID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Replies = LazyLoading extends LazyLoadingDisabled ? EagerReplies : LazyReplies

export declare const Replies: (new (init: ModelInit<Replies>) => Replies) & {
  copyOf(source: Replies, mutator: (draft: MutableModel<Replies>) => MutableModel<Replies> | void): Replies;
}

type EagerChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly userId?: string | null;
  readonly email?: string | null;
  readonly studyGroupId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Chat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly text?: string | null;
  readonly userId?: string | null;
  readonly email?: string | null;
  readonly studyGroupId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Chat = LazyLoading extends LazyLoadingDisabled ? EagerChat : LazyChat

export declare const Chat: (new (init: ModelInit<Chat>) => Chat) & {
  copyOf(source: Chat, mutator: (draft: MutableModel<Chat>) => MutableModel<Chat> | void): Chat;
}

type EagerStudyGroupCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudyGroupCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupName: string;
  readonly numMembers: number;
  readonly className: string;
  readonly acceptingMembers: boolean;
  readonly description: string;
  readonly groupOwner: string;
  readonly image?: string | null;
  readonly memberList?: string[] | null;
  readonly Announcements?: (Announcement | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStudyGroupCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StudyGroupCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly groupName: string;
  readonly numMembers: number;
  readonly className: string;
  readonly acceptingMembers: boolean;
  readonly description: string;
  readonly groupOwner: string;
  readonly image?: string | null;
  readonly memberList?: string[] | null;
  readonly Announcements: AsyncCollection<Announcement>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StudyGroupCard = LazyLoading extends LazyLoadingDisabled ? EagerStudyGroupCard : LazyStudyGroupCard

export declare const StudyGroupCard: (new (init: ModelInit<StudyGroupCard>) => StudyGroupCard) & {
  copyOf(source: StudyGroupCard, mutator: (draft: MutableModel<StudyGroupCard>) => MutableModel<StudyGroupCard> | void): StudyGroupCard;
}

type EagerMemberCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MemberCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly studyGroupId?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMemberCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MemberCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly studyGroupId?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MemberCard = LazyLoading extends LazyLoadingDisabled ? EagerMemberCard : LazyMemberCard

export declare const MemberCard: (new (init: ModelInit<MemberCard>) => MemberCard) & {
  copyOf(source: MemberCard, mutator: (draft: MutableModel<MemberCard>) => MutableModel<MemberCard> | void): MemberCard;
}

type EagerProfileCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly major?: string | null;
  readonly image?: string | null;
  readonly classesEnrolled?: string | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProfileCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProfileCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName?: string | null;
  readonly email?: string | null;
  readonly major?: string | null;
  readonly image?: string | null;
  readonly classesEnrolled?: string | null;
  readonly userId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProfileCard = LazyLoading extends LazyLoadingDisabled ? EagerProfileCard : LazyProfileCard

export declare const ProfileCard: (new (init: ModelInit<ProfileCard>) => ProfileCard) & {
  copyOf(source: ProfileCard, mutator: (draft: MutableModel<ProfileCard>) => MutableModel<ProfileCard> | void): ProfileCard;
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly announcementID: string;
  readonly username?: string | null;
  readonly comment?: string | null;
  readonly likes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly announcementID: string;
  readonly username?: string | null;
  readonly comment?: string | null;
  readonly likes?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(source: Comment, mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void): Comment;
}

type EagerAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly username: string;
  readonly announcement: string;
  readonly Comments?: (Comment | null)[] | null;
  readonly studygroupcardID: string;
  readonly Replies?: (Replies | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAnnouncement = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Announcement, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly username: string;
  readonly announcement: string;
  readonly Comments: AsyncCollection<Comment>;
  readonly studygroupcardID: string;
  readonly Replies: AsyncCollection<Replies>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Announcement = LazyLoading extends LazyLoadingDisabled ? EagerAnnouncement : LazyAnnouncement

export declare const Announcement: (new (init: ModelInit<Announcement>) => Announcement) & {
  copyOf(source: Announcement, mutator: (draft: MutableModel<Announcement>) => MutableModel<Announcement> | void): Announcement;
}