import { schema } from 'normalizr';


const classes = new schema.Entity('classes', {}, {
  idAttribute: 'id'
});
const teacher = new schema.Entity('teachers', {}, {
  idAttribute: 'id'
})

const satisfiled = new schema.Entity('satisfiled', { //满意度反馈
  class_info: classes,
  teacher_info: teacher
}, {
    idAttribute: 'time'
  })

const students = new schema.Entity('students', {}, {  //首页全部学生
  idAttribute: 'mid'
})

const course = new schema.Entity('course', {}, { //班级课程内容
  idAttribute: 'course_name'
})

export const SATISFILEDLIST = [satisfiled];
export const STUDENTLIST = [students];
export const COURSELIST = [course]