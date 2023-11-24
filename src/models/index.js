// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Invite, Replies, Chat, StudyGroupCard, MemberCard, ProfileCard, Comment, Announcement } = initSchema(schema);

export {
  Invite,
  Replies,
  Chat,
  StudyGroupCard,
  MemberCard,
  ProfileCard,
  Comment,
  Announcement
};