import { schema } from 'normalizr';

const myMusicSchema = new schema.Entity('myMusic', {}, { idAttribute: 'id' });
const myMusicListSchema = new schema.Array(myMusicSchema);

const commendMusicSchema = new schema.Entity('commendMusic', {}, { idAttribute: 'id' });
const commendMusicListSchema = new schema.Array(commendMusicSchema);
export default {
  myMusicListSchema,
  commendMusicListSchema
};
