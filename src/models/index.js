// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Replies, Chat, StudyGroupCard, MemberCard, ProfileCard, Comment, Announcement } = initSchema(schema);

export {
  Replies,
  Chat,
  StudyGroupCard,
  MemberCard,
  ProfileCard,
  Comment,
  Announcement
};