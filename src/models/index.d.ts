import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum Priority {
  LOW = "LOW",
  NORMAL = "NORMAL",
  HIGH = "HIGH"
}



type EagerMemberCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MemberCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly StudyGroupCards?: (MemberCardStudyGroupCard | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMemberCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MemberCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly StudyGroupCards: AsyncCollection<MemberCardStudyGroupCard>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MemberCard = LazyLoading extends LazyLoadingDisabled ? EagerMemberCard : LazyMemberCard

export declare const MemberCard: (new (init: ModelInit<MemberCard>) => MemberCard) & {
  copyOf(source: MemberCard, mutator: (draft: MutableModel<MemberCard>) => MutableModel<MemberCard> | void): MemberCard;
}

type EagerTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly priority?: Priority | keyof typeof Priority | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Todo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly priority?: Priority | keyof typeof Priority | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
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
  readonly studygroupcardID: string;
  readonly username: string;
  readonly date: string;
  readonly announcement: string;
  readonly Comments?: (Comment | null)[] | null;
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
  readonly studygroupcardID: string;
  readonly username: string;
  readonly date: string;
  readonly announcement: string;
  readonly Comments: AsyncCollection<Comment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Announcement = LazyLoading extends LazyLoadingDisabled ? EagerAnnouncement : LazyAnnouncement

export declare const Announcement: (new (init: ModelInit<Announcement>) => Announcement) & {
  copyOf(source: Announcement, mutator: (draft: MutableModel<Announcement>) => MutableModel<Announcement> | void): Announcement;
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
  readonly description?: string | null;
  readonly acceptingMembers: boolean;
  readonly groupOwner: string;
  readonly image?: string | null;
  readonly Announcements?: (Announcement | null)[] | null;
  readonly memberList?: (string | null)[] | null;
  readonly membercards?: (MemberCardStudyGroupCard | null)[] | null;
  readonly accepting: boolean;
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
  readonly description?: string | null;
  readonly acceptingMembers: boolean;
  readonly groupOwner: string;
  readonly image?: string | null;
  readonly Announcements: AsyncCollection<Announcement>;
  readonly memberList?: (string | null)[] | null;
  readonly membercards: AsyncCollection<MemberCardStudyGroupCard>;
  readonly accepting: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StudyGroupCard = LazyLoading extends LazyLoadingDisabled ? EagerStudyGroupCard : LazyStudyGroupCard

export declare const StudyGroupCard: (new (init: ModelInit<StudyGroupCard>) => StudyGroupCard) & {
  copyOf(source: StudyGroupCard, mutator: (draft: MutableModel<StudyGroupCard>) => MutableModel<StudyGroupCard> | void): StudyGroupCard;
}

type EagerMemberCardStudyGroupCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MemberCardStudyGroupCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly memberCardId?: string | null;
  readonly studyGroupCardId?: string | null;
  readonly memberCard: MemberCard;
  readonly studyGroupCard: StudyGroupCard;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMemberCardStudyGroupCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<MemberCardStudyGroupCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly memberCardId?: string | null;
  readonly studyGroupCardId?: string | null;
  readonly memberCard: AsyncItem<MemberCard>;
  readonly studyGroupCard: AsyncItem<StudyGroupCard>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MemberCardStudyGroupCard = LazyLoading extends LazyLoadingDisabled ? EagerMemberCardStudyGroupCard : LazyMemberCardStudyGroupCard

export declare const MemberCardStudyGroupCard: (new (init: ModelInit<MemberCardStudyGroupCard>) => MemberCardStudyGroupCard) & {
  copyOf(source: MemberCardStudyGroupCard, mutator: (draft: MutableModel<MemberCardStudyGroupCard>) => MutableModel<MemberCardStudyGroupCard> | void): MemberCardStudyGroupCard;
}