module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    return await db.createCollection('summaries', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          // required: [ 'email', 'password', 'username' ],
          required: [ 'id', 'title', 'content', 'channel' ],
          properties: {
            // email: {
            //   bsonType: 'string',
            //   pattern: '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}',
            // },
            id: {
              bsonType: 'objectId',
            },
            title: {
              bsonType: 'string',
            },
            content: {
              bsonType: 'string',
            },
            channel: {
              bsonType: 'string',
            },
          },
        },
      },
      validationLevel: 'strict',
      validationAction: 'error',
    })
  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
    return await db.collection('summaries').drop()
  }
};
