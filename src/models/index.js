// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Priority = {
  "LOW": "LOW",
  "NORMAL": "NORMAL",
  "HIGH": "HIGH"
};

const { MemberCard, Todo, ProfileCard, Comment, Announcement, StudyGroupCard, MemberCardStudyGroupCard } = initSchema(schema);

export {
  MemberCard,
  Todo,
  ProfileCard,
  Comment,
  Announcement,
  StudyGroupCard,
  MemberCardStudyGroupCard,
  Priority
};