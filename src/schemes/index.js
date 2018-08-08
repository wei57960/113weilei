import { schema } from 'normalizr';

const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers', {}, {
  idAttribute: 'id'
})

const satisfiled = new schema.Entity('satisfiled', {
  class_info: classes,
  teacher_info: teacher
}, {
    idAttribute: 'time'
  })

const student = new schema.Entity('students', {}, {
  idAttribute: 'mid'
})

// lesson

const lesson = new schema.Entity('lessons', {
  classInfo: classes,
  teacherInfo: teacher
}, {
    idAttribute: 'id'
  })

const comments = new schema.Entity('comments', {},
  { idAttribute: 'id' })

const homework = new schema.Entity('homeworks', {
  classInfo: classes,
  comments: [comments],
  teacherInfo: teacher
}, { idAttribute: 'id' })

export const COMMENTS = [comments]
export const HOMEWORK = [homework];

export const LESSONS = [lesson];

export const STUDENTLIST = [student];


export const SATISFILEDLIST = [satisfiled];